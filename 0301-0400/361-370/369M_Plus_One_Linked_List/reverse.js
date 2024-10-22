// 369. Plus One Linked List
// https://leetcode.com/problems/plus-one-linked-list/description/
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
var plusOne = function (head) {
  head = reverse(head);
  let prev = null;
  let curr = head;
  let carry = 1;
  while (curr) {
    const sum = curr.val + carry;
    carry = sum > 9 ? 1 : 0;
    curr.val = sum % 10;

    prev = curr;
    curr = curr.next;
  }

  if (carry) {
    prev.next = new ListNode(carry);
  }

  return reverse(head);

  function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
};

// [1,2,3]
var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};
// [1,2,4]
var expected = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};
var result = plusOne(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [0]
var head = {
  val: 0,
  next: null,
};
// [1]
var expected = {
  val: 1,
  next: null,
};
var result = plusOne(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [9]
var head = {
  val: 9,
  next: null,
};
// [1,0]
var expected = {
  val: 1,
  next: {
    val: 0,
    next: null,
  },
};
var result = plusOne(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1,9,9]
var head = {
  val: 1,
  next: {
    val: 9,
    next: {
      val: 9,
      next: null,
    },
  },
};
// [2,0,0]
var expected = {
  val: 2,
  next: {
    val: 0,
    next: {
      val: 0,
      next: null,
    },
  },
};
var result = plusOne(head);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
