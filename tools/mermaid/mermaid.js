"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
function generateSequenceDiagram(entryMethodName, sourceCode) {
    var sourceFile = ts.createSourceFile('temp.ts', sourceCode, ts.ScriptTarget.ES2015, true);
    var diagram = "sequenceDiagram\n";
    var methodStack = [];
    function visit(node, currentMethod) {
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
            var calledMethodDeclaration = findMethodDeclaration(calledMethodName);
            if (calledMethodDeclaration) {
                visitNodeChildren(calledMethodDeclaration, calledMethodName);
            }
            // Return to the parent method
            var parentMethod = methodStack.pop();
            if (parentMethod) {
                diagram += "".concat(extractMethodCallName(calledMethodName), " -->> ").concat(extractMethodCallName(parentMethod), ": return\n");
            }
        }
        ts.forEachChild(node, function (child) { return visit(child, currentMethod); });
    }
    function visitNodeChildren(node, currentMethod) {
        ts.forEachChild(node, function (child) { return visit(child, currentMethod); });
    }
    function isLibraryMethod(methodName) {
        // You can expand this list to exclude more built-in methods or methods from external libraries
        var excludedPrefixes = ['console.'];
        return excludedPrefixes.some(function (prefix) { return methodName.startsWith(prefix); });
    }
    function extractMethodCallName(expressionText) {
        var methodName = expressionText.split('(')[0];
        return methodName;
    }
    function findMethodDeclaration(methodName) {
        var found = null;
        function visit(node) {
            var _a;
            if (ts.isClassDeclaration(node)) {
                node.members.forEach(function (member) {
                    var _a;
                    if (ts.isMethodDeclaration(member) &&
                        ((_a = member.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile)) === methodName) {
                        found = member;
                    }
                });
            }
            else if ((ts.isFunctionDeclaration(node) || ts.isMethodDeclaration(node)) &&
                ((_a = node.name) === null || _a === void 0 ? void 0 : _a.getText(sourceFile)) === methodName) {
                found = node;
            }
            else {
                ts.forEachChild(node, visit);
            }
        }
        ts.forEachChild(sourceFile, visit);
        return found;
    }
    var entryMethodDeclaration = findMethodDeclaration(entryMethodName);
    if (entryMethodDeclaration) {
        visitNodeChildren(entryMethodDeclaration, entryMethodName);
    }
    return diagram;
}
var sourceCode = fs.readFileSync('./testing-methods.ts', 'utf8');
var entryMethodName = 'firstMethod';
var sequenceDiagram = generateSequenceDiagram(entryMethodName, sourceCode);
var outputFile = 'output.mmd';
fs.writeFileSync(outputFile, sequenceDiagram, 'utf8');
console.log("Mermaid sequence diagram saved to ".concat(outputFile));
