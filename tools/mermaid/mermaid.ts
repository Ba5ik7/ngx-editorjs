import * as ts from 'typescript';
import * as fs from 'fs';

function generateSequenceDiagram(entryMethodName: string, sourceCode: string): string {
  const sourceFile = ts.createSourceFile('temp.ts', sourceCode, ts.ScriptTarget.ES2015, true);
  let diagram = `sequenceDiagram\n`;

  let methodStack: string[] = [];

  function visit(node: ts.Node, currentMethod: string) {
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
      const calledMethodDeclaration = findMethodDeclaration(calledMethodName);
      if (calledMethodDeclaration) {
        visitNodeChildren(calledMethodDeclaration, calledMethodName);
      }
  
      // Return to the parent method
      const parentMethod = methodStack.pop();
      if (parentMethod) {
        diagram += `${extractMethodCallName(calledMethodName)} -->> ${extractMethodCallName(parentMethod)}: return\n`;
      }
    }
    ts.forEachChild(node, child => visit(child, currentMethod));
  }

  function visitNodeChildren(node: ts.Node, currentMethod: string) {
    ts.forEachChild(node, child => visit(child, currentMethod));
  }

  function isLibraryMethod(methodName: string): boolean {
    // You can expand this list to exclude more built-in methods or methods from external libraries
    const excludedPrefixes = ['console.'];
    return excludedPrefixes.some(prefix => methodName.startsWith(prefix));
  }
  
  function extractMethodCallName(expressionText: string): string {
    const methodName = expressionText.split('(')[0];
    return methodName;
  }

  function findMethodDeclaration(methodName: string): ts.FunctionDeclaration | ts.MethodDeclaration | null {
    let found: ts.FunctionDeclaration | ts.MethodDeclaration | null = null;

    function visit(node: ts.Node) {
      if (ts.isClassDeclaration(node)) {
        node.members.forEach((member) => {
          if (
            ts.isMethodDeclaration(member) &&
            member.name?.getText(sourceFile) === methodName
          ) {
            found = member;
          }
        });
      } else if (
        (ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node)) &&
        node.name?.getText(sourceFile) === methodName
      ) {
        found = node;
      } else {
        ts.forEachChild(node, visit);
      }
    }

    ts.forEachChild(sourceFile, visit);
    return found;
  }

  const entryMethodDeclaration = findMethodDeclaration(entryMethodName);
  if (entryMethodDeclaration) {
    visitNodeChildren(entryMethodDeclaration, entryMethodName);
  }

  return diagram;
}

const sourceCode = fs.readFileSync('./testing-methods.ts', 'utf8');
const entryMethodName = 'firstMethod';
const sequenceDiagram = generateSequenceDiagram(entryMethodName, sourceCode);

const outputFile = 'output.mmd';
fs.writeFileSync(outputFile, sequenceDiagram, 'utf8');
console.log(`Mermaid sequence diagram saved to ${outputFile}`);
