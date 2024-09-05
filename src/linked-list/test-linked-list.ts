import {LinkedList} from './linked-list';

const list = new LinkedList<object>();
list.insert({a: 'aaa'});
list.insert({b: 'bbb'});
list.insert({c: 'ccc'});
list.insertByIndex({f: 'fff'}, 1);
list.printList();
