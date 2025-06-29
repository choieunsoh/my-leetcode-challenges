class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val, this.head);
    this.head = newNode;
    this.size++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    const val = this.head.val;
    this.head = this.head.next;
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
    return result.reverse();
  }
}

module.exports = { Stack };

// test stack
/*
var arr = [1, 2, 3, 4, 5];
var stack = new Stack();
for (let i = 0; i < arr.length; i++) {
  stack.push(arr[i]);
}
console.log(stack.toArray()); // [1, 2, 3, 4, 5]
console.log(stack.pop()); // 5
console.log(stack.toArray()); // [1, 2, 3, 4]
console.log(stack.peek()); // 4
console.log(stack.isEmpty()); // false
console.log(stack.pop()); // 4
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // undefined
console.log(stack.isEmpty()); // true
console.log(stack.toArray()); // []
console.log(stack.peek()); // undefined
*/
