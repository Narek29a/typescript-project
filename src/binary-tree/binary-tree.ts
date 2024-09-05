export class BinaryTree<T> {
    root: Node<T> | null = null;

    public add(addedValue: T) {
        const newNode: Node<T> = new Node<T>(addedValue);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: Node<T>, newNode: Node<T>) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


    public traverse() {
        this.inorderTraversal(this.root);
    }

    public inorderTraversal(node: Node<T> | null) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }
}


class Node<T> {
    left: Node<T> | null = null;
    right: Node<T> | null = null;
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}
