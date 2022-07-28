// https://leetcode.com/problems/design-linked-list/
// 707. Design Linked List

var LinkedList = function (val) {
  this.val = val;
  this.next = null;
};
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {LinkedList}
 */
MyLinkedList.prototype.getNode = function (index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return null;
  let cur = this.head;

  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  const node = this.getNode(index);
  return !node ? -1 : node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new LinkedList(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new LinkedList(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  if (index === 0) return this.addAtHead(val);
  if (index === this.size) return this.addAtTail(val);

  let cur = this.getNode(index - 1);
  const newNode = new LinkedList(val);
  newNode.next = cur.next;
  cur.next = newNode;
  this.size++;
  return this;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  if (index === this.size - 1) {
    this.tail = this.getNode(index - 1);
    this.tail.next = null;
    this.size--;
    return;
  }

  const cur = this.getNode(index - 1);
  cur.next = cur.next.next;
  this.size--;
  return this;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
