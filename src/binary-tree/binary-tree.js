"use strict";
exports.__esModule = true;
exports.BinaryTree = void 0;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    BinaryTree.prototype.add = function (addedValue) {
        var newNode = new Node(addedValue);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinaryTree.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinaryTree.prototype.traverse = function () {
        this.inorderTraversal(this.root);
    };
    BinaryTree.prototype.inorderTraversal = function (node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
var Node = /** @class */ (function () {
    function Node(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    return Node;
}());
