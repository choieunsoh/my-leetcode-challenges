// 3217. Delete Nodes From Linked List Present in Array
// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/description/
// T.C.: O(n)
// S.C.: O(n)
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
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {
  const max = Math.max(...nums);
  const freq = new Array(max + 1).fill(false);
  for (const num of nums) {
    freq[num] = true;
  }

  const temp = new ListNode();
  let current = temp;

  while (head !== null) {
    if (head.val >= freq.length || freq[head.val] === false) {
      current.next = head;
      current = current.next;
    }
    head = head.next;
  }

  current.next = null;
  return temp.next;
};

var nums = [1, 2, 3],
  // [1, 2, 3, 4, 5];
  head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null,
          },
        },
      },
    },
  };
// [4, 5];
var expected = {
  val: 4,
  next: {
    val: 5,
    next: null,
  },
};
var result = modifiedList(nums, head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var nums = [1],
  // [1, 2, 1, 2, 1, 2]
  head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 1,
            next: {
              val: 2,
              next: null,
            },
          },
        },
      },
    },
  };
// [2, 2, 2];
var expected = {
  val: 2,
  next: {
    val: 2,
    next: {
      val: 2,
      next: null,
    },
  },
};
var result = modifiedList(nums, head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var nums = [9, 2, 5],
  // [2, 10, 9];
  head = {
    val: 2,
    next: {
      val: 10,
      next: {
        val: 9,
        next: null,
      },
    },
  };
// [10];
var expected = {
  val: 10,
  next: null,
};
var result = modifiedList(nums, head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var nums = [5],
  // [1, 2, 3, 4];
  head = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null,
        },
      },
    },
  };
// [1, 2, 3, 4];
var expected = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};
var result = modifiedList(nums, head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
