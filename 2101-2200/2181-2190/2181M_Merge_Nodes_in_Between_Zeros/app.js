// 2181. Merge Nodes in Between Zeros
// https://leetcode.com/problems/merge-nodes-in-between-zeros/
// T.C.: O(n)
// S.C.: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let prev = head;
  let current = head.next;
  let sum = 0;
  while (current) {
    if (current.val === 0) {
      if (sum > 0) {
        prev.next = new ListNode(sum, current.next);
        prev = prev.next;
      }
      sum = 0;
    } else {
      sum += current.val;
    }
    current = current.next;
  }
  return head.next;
};

// [0, 3, 1, 0, 4, 5, 2, 0];
var head = {
  val: 0,
  next: {
    val: 3,
    next: {
      val: 1,
      next: {
        val: 0,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 2,
              next: {
                val: 0,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};
// [4, 11];
var expected = {
  val: 4,
  next: {
    val: 11,
    next: null,
  },
};
var result = mergeNodes(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [0, 1, 0, 3, 0, 2, 2, 0];
var head = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 0,
      next: {
        val: 3,
        next: {
          val: 0,
          next: {
            val: 2,
            next: {
              val: 2,
              next: {
                val: 0,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};
// [1, 3, 4];
var expected = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};
var result = mergeNodes(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
