// 3062. Winner of the Linked List Game
// https://leetcode.com/problems/winner-of-the-linked-list-game/description/
// T.O.: O(n)
// S.C.: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {string}
 */
var gameResult = function (head) {
  let evenWins = 0;
  let oddWins = 0;
  let even = head;
  let odd = head.next;
  while (even && odd) {
    if (even.val > odd.val) {
      evenWins++;
    } else {
      oddWins++;
    }
    even = even.next?.next;
    odd = odd.next?.next;
  }

  if (evenWins === oddWins) return 'Tie';
  return evenWins > oddWins ? 'Even' : 'Odd';
};

// [2, 1]
var head = {
  val: 2,
  next: { val: 1 },
};
var expected = 'Even';
var result = gameResult(head);
console.log(result, result === expected);

// [2, 5, 4, 7, 20, 5];
var head = {
  val: 2,
  next: {
    val: 5,
    next: {
      val: 4,
      next: {
        val: 7,
        next: {
          val: 20,
          next: { val: 5 },
        },
      },
    },
  },
};

var expected = 'Odd';
var result = gameResult(head);
console.log(result, result === expected);

// [4, 5, 2, 1];
var head = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 2,
      next: { val: 1 },
    },
  },
};
var expected = 'Tie';
var result = gameResult(head);
console.log(result, result === expected);
