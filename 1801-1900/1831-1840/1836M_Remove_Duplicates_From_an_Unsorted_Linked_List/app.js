// 1836. Remove Duplicates From an Unsorted Linked List
// https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesUnsorted = function (head) {
  const counts = new Map();
  let curr = head;
  while (curr) {
    counts.set(curr.val, (counts.get(curr.val) ?? 0) + 1);
    curr = curr.next;
  }

  const dummy = { val: 0, next: head };
  let prev = dummy;
  curr = dummy.next;
  while (curr) {
    if (counts.get(curr.val) === 1) {
      prev = curr;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }

  return dummy.next;
};

// [1, 2, 3, 2];
var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        next: null,
      },
    },
  },
};
// [1, 3];
var expected = {
  val: 1,
  next: {
    val: 3,
    next: null,
  },
};
var result = deleteDuplicatesUnsorted(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [2, 1, 1, 2];
var head = {
  val: 2,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: null,
      },
    },
  },
};
// [];
var expected = null;
var result = deleteDuplicatesUnsorted(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3, 2, 2, 1, 3, 2, 4];
var head = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 3,
          next: {
            val: 2,
            next: {
              val: 4,
              next: null,
            },
          },
        },
      },
    },
  },
};
// [1, 4];
var expected = {
  val: 1,
  next: {
    val: 4,
    next: null,
  },
};
var result = deleteDuplicatesUnsorted(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
