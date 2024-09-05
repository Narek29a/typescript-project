export class LinkedList<T> {
  head: Node<T> | null = null;


  public insert(data: T): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let last = this.head;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = newNode;
      newNode.prev = last;
    }
  }

  public insertByIndex(data: T, index: number): void {
    if (index >= this.getSize()) {
      throw Error('Fuck off');
    }
    if (index === this.getSize() - 1) {
      this.insert(data);
    } else {
      const newNode = new Node(data);
      const temp = this.getByIndex(index);
      const prev = this.getByIndex(index - 1);
      prev?.next = newNode;
      newNode.next = temp;
      temp?.prev = newNode;
      newNode.prev = prev;
    }
  }

  public getSize(): number {
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

  public getByIndex(index: number): Node<T> | null {
    if (index === 0) {
      return this.head;
    }
    if (index >= this.getSize()) {
      throw Error('index out');
    }
    let tempNode = this.head;
    for (let i = 0; i < index && tempNode?.next; i++) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  public printList(): void {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }
}

class Node<T> {
  data: T | null = null;
  next: Node<T> | null = null;
  prev: Node<T> | null = null;

  constructor(public data: T | null) {
    this.data = data;
  }
}
