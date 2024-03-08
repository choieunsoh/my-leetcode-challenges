// 3063. Linked List Frequency
// https://leetcode.com/problems/linked-list-frequency/
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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function frequenciesOfElements(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const map = new Map<number, ListNode>();
  let cursor: ListNode | null = head;
  let prev = head!;
  while (cursor) {
    const node = map.get(cursor.val);
    if (node) {
      node.val++;
      prev.next = cursor.next;
    } else {
      map.set(cursor.val, cursor);
      cursor.val = 1;
      prev = cursor;
    }
    cursor = cursor.next;
  }

  return head;
}

// [1, 1, 2, 1, 2, 3];
// [3, 2, 1];
var head: ListNode = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: null,
          },
        },
      },
    },
  },
};
var expected: ListNode = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 1,
      next: null,
    },
  },
};
var result = frequenciesOfElements(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 1, 2, 2, 2];
// [2, 3];
var head: ListNode = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 2,
          next: null,
        },
      },
    },
  },
};
var expected: ListNode = {
  val: 2,
  next: {
    val: 3,
    next: null,
  },
};
var result = frequenciesOfElements(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [6, 5, 4, 3, 2, 1];
// [1, 1, 1, 1, 1, 1];
var head: ListNode = {
  val: 6,
  next: {
    val: 5,
    next: {
      val: 4,
      next: {
        val: 3,
        next: {
          val: 2,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  },
};
var expected: ListNode = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 1,
        next: {
          val: 1,
          next: {
            val: 1,
            next: null,
          },
        },
      },
    },
  },
};
var result = frequenciesOfElements(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
