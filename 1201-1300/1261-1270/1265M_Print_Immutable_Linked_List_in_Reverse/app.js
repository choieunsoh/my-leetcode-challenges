// 1265. Print Immutable Linked List in Reverse
// https://leetcode.com/problems/print-immutable-linked-list-in-reverse/description/
// T.C.: O(n)
// S.C.: O(n)
// This is the ImmutableListNode's API interface.
// You should not implement it, or speculate about its implementation.
class ImmutableListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  // @return {void}
  printValue() {
    // print the value of this node.
    console.log(this.val);
  }

  // @return {ImmutableListNode}
  getNext() {
    // return the next node.
    return this.next;
  }
}

/**
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function (head) {
  if (!head) return;
  printLinkedListInReverse(head.getNext());
  head.printValue();
};

// [1, 2, 3, 4];
var head = new ImmutableListNode(1);
head.next = new ImmutableListNode(2);
head.next.next = new ImmutableListNode(3);
head.next.next.next = new ImmutableListNode(4);
var expected = [4, 3, 2, 1];
printLinkedListInReverse(head);

// [0, -4, -1, 3, -5];
var head = new ImmutableListNode(0);
head.next = new ImmutableListNode(-4);
head.next.next = new ImmutableListNode(-1);
head.next.next.next = new ImmutableListNode(3);
head.next.next.next.next = new ImmutableListNode(-5);
var expected = [-5, 3, -1, -4, 0];
printLinkedListInReverse(head);

// [-2, 0, 6, 4, 4, -6];
var head = new ImmutableListNode(-2);
head.next = new ImmutableListNode(0);
head.next.next = new ImmutableListNode(6);
head.next.next.next = new ImmutableListNode(4);
head.next.next.next.next = new ImmutableListNode(4);
head.next.next.next.next.next = new ImmutableListNode(-6);
var expected = [-6, 4, 4, 6, 0, -2];
printLinkedListInReverse(head);
