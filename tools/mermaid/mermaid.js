"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
function generateSequenceDiagram(entryMethodName, sourceFiles) {
    var diagram = "sequenceDiagram\n";
    var methodStack = [];
    var methodToFileMap = new Map();
    function findMethodDeclarationInImportedInstance(methodName, instanceName, sourceFiles) {
        var _loop_1 = function (sourceFile) {
            var classDeclarations = sourceFile.statements.filter(ts.isClassDeclaration);
            var _loop_2 = function (classDeclaration) {
                var methodDeclaration = classDeclaration.members.find(function (member) {
                    var _a, _b;
                    var methodFound = ts.isMethodDeclaration(member) && ((_a = member.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile)) === methodName.split('.').pop();
                    if (methodFound) {
                        var propertyDeclaration = classDeclaration.members.find(function (member) {
                            var _a;
                            if (ts.isPropertyDeclaration(member)) {
                                var initializer = member.initializer;
                                if (initializer && ts.isNewExpression(initializer)) {
                                    return initializer.expression.getText(sourceFile) === ((_a = classDeclaration.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile));
                                }
                            }
                            return false;
                        });
                        if (propertyDeclaration && ((_b = propertyDeclaration.name) === null || _b === void 0 ? void 0 : _b.getText(sourceFile)) === instanceName.split('.').pop()) {
                            return true;
                        }
                    }
                    return false;
                });
                if (methodDeclaration) {
                    return { value: methodDeclaration };
                }
            };
            for (var _a = 0, classDeclarations_1 = classDeclarations; _a < classDeclarations_1.length; _a++) {
                var classDeclaration = classDeclarations_1[_a];
                var state_2 = _loop_2(classDeclaration);
                if (typeof state_2 === "object")
                    return state_2;
            }
        };
        for (var _i = 0, sourceFiles_1 = sourceFiles; _i < sourceFiles_1.length; _i++) {
            var sourceFile = sourceFiles_1[_i];
            var state_1 = _loop_1(sourceFile);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return null;
    }
    function visit(node, currentMethod, sourceFile) {
        var _a;
        if (ts.isCallExpression(node)) {
            var methodName = node.expression.getText(sourceFile);
            if (isLibraryMethod(methodName)) {
                return;
            }
            var calledMethodName = methodName;
            if (calledMethodName.startsWith('this.')) {
                calledMethodName = methodName.replace('this.', '');
            }
            diagram += "".concat(extractMethodCallName(currentMethod), " ->> ").concat(extractMethodCallName(calledMethodName), ": call\n");
            methodStack.push(currentMethod);
            // Follow the called method
            var calledMethodDeclaration = findMethodDeclaration(calledMethodName, sourceFiles);
            if (!calledMethodDeclaration) {
                console.log("Method ".concat(calledMethodDeclaration, " not found in source files. Trying to find it in imported instances..."));
                var instanceName = (_a = methodName.split('.').at(-1)) !== null && _a !== void 0 ? _a : '';
                calledMethodDeclaration = findMethodDeclarationInImportedInstance(calledMethodName, instanceName, sourceFiles);
            }
            if (calledMethodDeclaration) {
                var calledMethodSourceFile = methodToFileMap.get(extractMethodCallName(calledMethodName));
                if (calledMethodSourceFile) {
                    visitNodeChildren(calledMethodDeclaration, calledMethodName, calledMethodSourceFile);
                }
            }
            // Return to the parent method
            var parentMethod = methodStack.pop();
            if (parentMethod) {
                diagram += "".concat(extractMethodCallName(calledMethodName), " -->> ").concat(extractMethodCallName(parentMethod), ": return\n");
            }
        }
        ts.forEachChild(node, function (child) { return visit(child, currentMethod, sourceFile); });
    }
    function visitNodeChildren(node, currentMethod, currentSourceFile) {
        ts.forEachChild(node, function (child) { return visit(child, currentMethod, currentSourceFile); });
    }
    function isLibraryMethod(methodName) {
        var excludedPrefixes = ['console.'];
        return excludedPrefixes.some(function (prefix) { return methodName.startsWith(prefix); });
    }
    function extractMethodCallName(expressionText) {
        var methodName = expressionText.split('(')[0];
        return methodName;
    }
    function findMethodDeclaration(methodName, sourceFiles) {
        var found = null;
        function visit(node, sourceFile) {
            var _a;
            if (ts.isClassDeclaration(node)) {
                node.members.forEach(function (member) {
                    var _a;
                    if (ts.isMethodDeclaration(member) &&
                        ((_a = member.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile)) === methodName) {
                        found = member;
                        methodToFileMap.set(methodName, sourceFile);
                    }
                });
            }
            else if ((ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node)) &&
                ((_a = node.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile)) === methodName) {
                found = node;
                methodToFileMap.set(methodName, sourceFile);
            }
            else {
                ts.forEachChild(node, function (child) { return visit(child, sourceFile); });
            }
        }
        var _loop_3 = function (sourceFile) {
            ts.forEachChild(sourceFile, function (node) { return visit(node, sourceFile); });
        };
        for (var _i = 0, sourceFiles_2 = sourceFiles; _i < sourceFiles_2.length; _i++) {
            var sourceFile = sourceFiles_2[_i];
            _loop_3(sourceFile);
        }
        return found;
    }
    var entryMethodDeclaration = findMethodDeclaration(entryMethodName, sourceFiles);
    if (entryMethodDeclaration) {
        var entrySourceFile = methodToFileMap.get(entryMethodName);
        if (entrySourceFile) {
            visitNodeChildren(entryMethodDeclaration, entryMethodName, entrySourceFile);
        }
    }
    return diagram;
}
var firstSourceCode = fs.readFileSync('./testing-methods.ts', 'utf8');
var secondSourceCode = fs.readFileSync('./testing/testing-again.ts', 'utf8');
var firstSourceFile = ts.createSourceFile('testing-component.ts', firstSourceCode, ts.ScriptTarget.ES2015, true);
var secondSourceFile = ts.createSourceFile('testing-service.ts', secondSourceCode, ts.ScriptTarget.ES2015, true);
var sourceFiles = [firstSourceFile, secondSourceFile];
var entryMethodName = 'firstMethod';
var sequenceDiagram = generateSequenceDiagram(entryMethodName, sourceFiles);
var outputFile = 'output.mmd';
fs.writeFileSync(outputFile, sequenceDiagram, 'utf8');
console.log("Mermaid sequence diagram saved to ".concat(outputFile));
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
