import * as ts from 'typescript';
import * as fs from 'fs';

function generateSequenceDiagram(entryMethodName: string, sourceFiles: ts.SourceFile[]): string {
  let diagram = `sequenceDiagram\n`;

  let methodStack: string[] = [];
  let methodToFileMap: Map<string, ts.SourceFile> = new Map();

  function findMethodDeclarationInImportedInstance(methodName: string, instanceName: string, sourceFiles: ts.SourceFile[]): ts.MethodDeclaration | null {
    for (const sourceFile of sourceFiles) {
      const classDeclarations = sourceFile.statements.filter(ts.isClassDeclaration);
      for (const classDeclaration of classDeclarations) {
        const methodDeclaration = classDeclaration.members.find(member => {
          const methodFound = ts.isMethodDeclaration(member) && member.name?.getText(sourceFile) === methodName.split('.').pop();
          if (methodFound) {
            const propertyDeclaration = classDeclaration.members.find(member => {
              if (ts.isPropertyDeclaration(member)) {
                const initializer = member.initializer;
                if (initializer && ts.isNewExpression(initializer)) {
                  return initializer.expression.getText(sourceFile) === classDeclaration.name?.getText(sourceFile);
                }
              }
              return false;
            });
  
            if (propertyDeclaration && propertyDeclaration.name?.getText(sourceFile) === instanceName.split('.').pop()) {
              return true;
            }
          }
          return false;
        }) as ts.MethodDeclaration | undefined;
  
        if (methodDeclaration) {
          return methodDeclaration;
        }
      }
    }
    return null;
  }  
  

  function visit(node: ts.Node, currentMethod: string, sourceFile: ts.SourceFile) {
    if (ts.isCallExpression(node)) {
      const methodName = node.expression.getText(sourceFile);
  
      if (isLibraryMethod(methodName)) {
        return;
      }
  
      let calledMethodName = methodName;
      if (calledMethodName.startsWith('this.')) {
        calledMethodName = methodName.replace('this.', '');
      }
  
      diagram += `${extractMethodCallName(currentMethod)} ->> ${extractMethodCallName(calledMethodName)}: call\n`;
      methodStack.push(currentMethod);
  
      // Follow the called method
      let calledMethodDeclaration = findMethodDeclaration(calledMethodName, sourceFiles);
      if (!calledMethodDeclaration) {
          console.log(`Method ${calledMethodDeclaration} not found in source files. Trying to find it in imported instances...`);
          const instanceName = methodName.split('.').at(-1) ?? '';
          calledMethodDeclaration = findMethodDeclarationInImportedInstance(calledMethodName, instanceName, sourceFiles);
      }
      if (calledMethodDeclaration) {
        const calledMethodSourceFile = methodToFileMap.get(extractMethodCallName(calledMethodName));
        if (calledMethodSourceFile) {
          visitNodeChildren(calledMethodDeclaration, calledMethodName, calledMethodSourceFile);
        }
      }
  
      // Return to the parent method
      const parentMethod = methodStack.pop();
      if (parentMethod) {
        diagram += `${extractMethodCallName(calledMethodName)} -->> ${extractMethodCallName(parentMethod)}: return\n`;
      }
    }
    ts.forEachChild(node, child => visit(child, currentMethod, sourceFile));
  }

  function visitNodeChildren(node: ts.Node, currentMethod: string, currentSourceFile: ts.SourceFile) {
    ts.forEachChild(node, child => visit(child, currentMethod, currentSourceFile));
  }

  function isLibraryMethod(methodName: string): boolean {
    const excludedPrefixes = ['console.'];
    return excludedPrefixes.some(prefix => methodName.startsWith(prefix));
  }

  function extractMethodCallName(expressionText: string): string {
    const methodName = expressionText.split('(')[0];
    return methodName;
  }

  function findMethodDeclaration(methodName: string, sourceFiles: ts.SourceFile[]): ts.FunctionDeclaration | ts.MethodDeclaration | null {
    let found: ts.FunctionDeclaration | ts.MethodDeclaration | null = null;

    function visit(node: ts.Node, sourceFile: ts.SourceFile) {
      if (ts.isClassDeclaration(node)) {
        node.members.forEach((member) => {
          if (
            ts.isMethodDeclaration(member) &&
            member.name?.getText(sourceFile) === methodName
          ) {
            found = member;
            methodToFileMap.set(methodName, sourceFile);
          }
        });
      } else if (
        (ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node)) &&
        node.name?.getText(sourceFile) === methodName
      ) {
        found = node;
        methodToFileMap.set(methodName, sourceFile);
      } else {
        ts.forEachChild(node, child => visit(child, sourceFile));
      }
    }

    for (const sourceFile of sourceFiles) {
      ts.forEachChild(sourceFile, node => visit(node, sourceFile));
    }
    return found;
  }

  const entryMethodDeclaration = findMethodDeclaration(entryMethodName, sourceFiles);
  if (entryMethodDeclaration) {
    const entrySourceFile = methodToFileMap.get(entryMethodName);
    if (entrySourceFile) {
      visitNodeChildren(entryMethodDeclaration, entryMethodName, entrySourceFile);
    }
  }

  return diagram;
}

const firstSourceCode = fs.readFileSync('./testing-methods.ts', 'utf8');
const secondSourceCode = fs.readFileSync('./testing/testing-again.ts', 'utf8');

const firstSourceFile = ts.createSourceFile('testing-component.ts', firstSourceCode, ts.ScriptTarget.ES2015, true);
const secondSourceFile = ts.createSourceFile('testing-service.ts', secondSourceCode, ts.ScriptTarget.ES2015, true);
const sourceFiles = [firstSourceFile, secondSourceFile];

const entryMethodName = 'firstMethod';
const sequenceDiagram = generateSequenceDiagram(entryMethodName, sourceFiles);

const outputFile = 'output.mmd';
fs.writeFileSync(outputFile, sequenceDiagram, 'utf8');
console.log(`Mermaid sequence diagram saved to ${outputFile}`);

// Excepted output:
// sequenceDiagram
// firstMethod ->> secondMethod: call
// secondMethod ->> this.testingService.callA: call
// this.testingService.callA -->> this.testingService.callB: call
// this.testingService.callB -->> this.testingService.callD: call
// this.testingService.callD -->> this.testingService.callB: return
// this.testingService.callB -->> this.testingService.callA: return
// this.testingService.callA -->> this.testingService.callC: call
// this.testingService.callC -->> this.testingService.callA: return
// this.testingService.callA -->> secondMethod: return
// secondMethod -->> firstMethod: return
// firstMethod ->> fourthMethod: call
// fourthMethod ->> this.testingService.callC: call
// this.testingService.callC -->> fourthMethod: return
// fourthMethod -->> firstMethod: return
