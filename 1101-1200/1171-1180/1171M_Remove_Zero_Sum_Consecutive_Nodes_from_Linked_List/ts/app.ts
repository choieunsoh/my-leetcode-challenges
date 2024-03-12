// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

var removeZeroSumSublists = function (head: ListNode | null): ListNode | null {
  const temp = new ListNode(0, head);
  const map = new Map<number, ListNode>();
  let curr: ListNode | null = temp;
  let sum = 0;
  while (curr) {
    sum += curr.val;
    map.set(sum, curr);
    curr = curr.next;
  }

  curr = temp;
  sum = 0;
  while (curr) {
    sum += curr.val;
    curr.next = map.get(sum)?.next ?? null;
    curr = curr.next;
  }
  return temp.next;
};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// [1, 2, -3, 3, 1];
var head: ListNode | null = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: -3,
      next: {
        val: 3,
        next: {
          val: 1,
          next: null,
        },
      },
    },
  },
};
// [3, 1]
var expected: ListNode | null = {
  val: 3,
  next: {
    val: 1,
    next: null,
  },
};
var result = removeZeroSumSublists(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 3, -3, 4];
var head: ListNode | null = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: -3,
        next: {
          val: 4,
          next: null,
        },
      },
    },
  },
};
// [1, 2, 4]
var expected: ListNode | null = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};
var result = removeZeroSumSublists(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 3, -3, -2];
var head: ListNode | null = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: -3,
        next: {
          val: -2,
          next: null,
        },
      },
    },
  },
};
// [1];
var expected: ListNode | null = {
  val: 1,
  next: null,
};
var result = removeZeroSumSublists(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 3, -3, -2, -1, 5];
var head: ListNode | null = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: -3,
        next: {
          val: -2,
          next: {
            val: -1,
            next: {
              val: 5,
              next: null,
            },
          },
        },
      },
    },
  },
};
// [5];
var expected: ListNode | null = {
  val: 5,
  next: null,
};
var result = removeZeroSumSublists(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
