class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }
    const val = this.head.val;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.size--;
    return val;
  }

  peek() {
    return this.head ? this.head.val : undefined;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}

module.exports = { Queue };

// test queue
/*
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.toArray()); // [1, 2, 3]
console.log(q.dequeue()); // 1
console.log(q.toArray()); // [2, 3]
console.log(q.peek()); // 2
console.log(q.isEmpty()); // false
console.log(q.dequeue()); // 2
console.log(q.dequeue()); // 3
console.log(q.dequeue()); // undefined
console.log(q.isEmpty()); // true
console.log(q.toArray()); // []
console.log(q.peek()); // undefined
*/
