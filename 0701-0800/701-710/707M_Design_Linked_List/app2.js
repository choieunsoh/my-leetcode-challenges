// 707. Design Linked list
// https://leetcode.com/problems/design-linked-list/
class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * @param {number} index
   * @return {LinkedListNode}
   */
  _get(index) {
    //if (this.size === 0 || index < 0 || index >= this.size) return null;
    if (this.size === 0 || index > this.size - 1 || index < 0) return null;
    if (index === 0) return this.head;
    if (index === this.size) return this.tail;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    const node = this._get(index);
    return node?.val;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    const newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const newNode = new LinkedListNode(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.addAtHead(val);
    if (index === this.size) this.addAtTail(val);

    const newNode = new LinkedListNode(val);
    const currentNode = this._get(index - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.size++;
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;

    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    if (index === this.size - 1) {
      this.tail = this._get(index - 1);
      this.tail.next = null;
      this.size--;
      return;
    }

    const currentNode = this._get(index - 1);
    currentNode.next = currentNode.next.next;
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
