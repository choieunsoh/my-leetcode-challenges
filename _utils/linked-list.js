class SinglyListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor(values = []) {
    this.head = null;
    for (const value of values) {
      this.addAtTail(value);
    }
  }

  #getNode(index) {
    let curr = this.head;
    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }
    return curr;
  }

  #getTail() {
    let curr = this.head;
    while (curr?.next) {
      curr = curr.next;
    }
    return curr;
  }

  get(index) {
    const curr = this.#getNode(index);
    return curr?.val;
  }

  addAtHead(val) {
    const curr = new SinglyListNode(val);
    curr.next = this.head;
    this.head = curr;
  }

  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val);
      return;
    }

    const tail = this.#getTail();
    const curr = new SinglyListNode(val);
    tail.next = curr;
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    const nodeBeforeIndex = this.#getNode(index - 1);
    if (!nodeBeforeIndex) {
      return;
    }

    const curr = new SinglyListNode(val);
    const nodeAfterIndex = nodeBeforeIndex.next;
    curr.next = nodeAfterIndex;
    nodeBeforeIndex.next = curr;
  }

  deleteAtHead() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  deleteAtTail() {
    let curr = this.head;
    while (curr?.next?.next) {
      curr = curr.next;
    }
    curr.next = null;
  }

  deleteAtIndex(index) {
    const curr = this.#getNode(index);
    if (!curr) {
      return;
    }

    const nodeAfterIndex = curr.next;
    if (index === 0) {
      this.head = nodeAfterIndex;
    } else {
      const prev = this.#getNode(index - 1);
      prev.next = next;
    }
  }

  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

class DoublyListNode {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor(values = []) {
    this.head = null;
    for (let index = 0; index < values.length; index++) {
      this.addAtTail(index, values[index]);
    }
  }

  #getNode(index) {
    let curr = this.head;
    for (let i = 0; i < index && curr; i++) {
      curr = curr.next;
    }
    return curr;
  }

  #getTail() {
    let curr = this.head;
    while (curr?.next) {
      curr = curr.next;
    }
    return curr;
  }

  get(index) {
    const curr = this.#getNode(index);
    return curr?.val;
  }

  addAtHead(val) {
    const curr = new DoublyListNode(val);
    curr.next = this.head;
    if (this.head !== null) {
      this.head.prev = curr;
    }
    this.head = curr;
  }

  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val);
      return;
    }

    const tail = this.#getTail();
    const curr = new DoublyListNode(val);
    curr.prev = tail;
    tail.next = curr;
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    const nodeBeforeIndex = this.#getNode(index - 1);
    if (!nodeBeforeIndex) {
      return;
    }

    const curr = new DoublyListNode(val);
    const nodeAfterIndex = nodeBeforeIndex.next;
    curr.prev = nodeBeforeIndex;
    curr.next = nodeAfterIndex;
    nodeBeforeIndex.next = curr;
    if (nodeAfterIndex) {
      nodeAfterIndex.prev = curr;
    }
  }

  deleteAtHead() {
    if (!this.head) {
      return;
    }

    if (this.head.next) {
      this.head.next.prev = null;
    }
    this.head = this.head.next;
  }

  deleteAtTail() {
    const curr = this.#getTail();
    if (!curr) {
      return;
    }

    if (curr.prev) {
      curr.prev.next = null;
    } else {
      this.head = null;
    }
  }

  deleteAtIndex(index) {
    const curr = this.#getNode(index);
    if (!curr) {
      return;
    }

    const nodeBeforeIndex = curr.prev;
    const nodeAfterIndex = curr.next;
    if (nodeBeforeIndex) {
      nodeBeforeIndex.next = nodeAfterIndex;
    } else {
      this.head = nodeAfterIndex;
    }
    if (nodeAfterIndex) {
      nodeAfterIndex.prev = nodeBeforeIndex;
    }
  }

  toArray() {
    const result = [];
    let curr = this.head;
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

module.exports = {
  SinglyListNode,
  SinglyLinkedList,
  DoublyListNode,
  DoublyLinkedList,
};
