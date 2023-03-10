// 382. Linked List Random Node
// https://leetcode.com/problems/linked-list-random-node/
const { ListNode, createList, toArray } = require('../../../_utils/list');
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
  let curr = head;
  let count = 0;
  while (curr) {
    count++;
    curr = curr.next;
  }
  this.count = count;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const randomIndex = (Math.random() * this.count) | 0;
  let curr = this.head;
  let index = 0;
  while (curr && index < randomIndex) {
    index++;
    curr = curr.next;
  }
  return curr.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
var head = createList([1, 2, 3]);
var obj = new Solution(head);
for (let i = 0; i < 100; i++) {
  var param_1 = obj.getRandom();
  console.log(i, param_1);
}
