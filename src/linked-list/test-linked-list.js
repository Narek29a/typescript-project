"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linked_list_1 = require("./linked-list");
const list = new linked_list_1.LinkedList();
list.insert({ a: 'aaa' });
list.insert({ b: 'bbb' });
list.insert({ c: 'ccc' });
list.insertByIndex({ f: 'fff' }, 1);
list.printList();
