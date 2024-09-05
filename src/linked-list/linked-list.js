"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let last = this.head;
            while (last.next !== null) {
                last = last.next;
            }
            last.next = newNode;
            newNode.prev = last;
        }
    }
    insertByIndex(data, index) {
        if (index >= this.getSize()) {
            throw Error('Fuck off');
        }
        if (index === this.getSize() - 1) {
            this.insert(data);
        }
        else {
            const newNode = new Node(data);
            const temp = this.getByIndex(index);
            const prev = this.getByIndex(index - 1);
            prev === null || prev === void 0 ? void 0 : prev.next = newNode;
            newNode.next = temp;
            temp === null || temp === void 0 ? void 0 : temp.prev = newNode;
            newNode.prev = prev;
        }
    }
    getSize() {
        if (this.head === null) {
            return 0;
        }
        let length = 1;
        let currentNode = this.head;
        while (currentNode.next) {
            length++;
            currentNode = currentNode.next;
        }
        return length;
    }
    getByIndex(index) {
        if (index === 0) {
            return this.head;
        }
        if (index >= this.getSize()) {
            throw Error('index out');
        }
        let tempNode = this.head;
        for (let i = 0; i < index && (tempNode === null || tempNode === void 0 ? void 0 : tempNode.next); i++) {
            tempNode = tempNode.next;
        }
        return tempNode;
    }
    printList() {
        let currNode = this.head;
        while (currNode !== null) {
            console.log(currNode);
            currNode = currNode.next;
        }
    }
}
exports.LinkedList = LinkedList;
class Node {
    constructor(data) {
        this.data = data;
        this.data = null;
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}
