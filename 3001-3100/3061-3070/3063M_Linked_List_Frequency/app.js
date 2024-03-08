// 3063. Linked List Frequency
// https://leetcode.com/problems/linked-list-frequency/
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
var frequenciesOfElements = function (head) {
  if (!head) return null;
  const map = new Map();
  const dummy = new ListNode(-1);
  let tail = dummy;
  while (head != null) {
    if (!map.has(head.val)) {
      map.set(head.val, new ListNode(0));
    }
    const node = map.get(head.val);
    node.val++;
    if (node.val === 1) {
      tail.next = node;
      tail = node;
    }
    head = head.next;
  }
  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// [1, 1, 2, 1, 2, 3];
// [3, 2, 1];
var head = {
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
          },
        },
      },
    },
  },
};
var expected = {
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
var head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 2,
        },
      },
    },
  },
};
var expected = {
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
var head = {
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
          },
        },
      },
    },
  },
};
var expected = {
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
