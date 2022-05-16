// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const createNode = (nums: number[]): ListNode | null => {
  const result = new ListNode(nums[0]);
  let curr = result;
  for (let i: number = 1; i < nums.length; i++) {
    curr.next = new ListNode(nums[i]);
    curr = curr.next;
  }
  return result;
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry: number = 0;
  let result: ListNode = new ListNode();
  let curr: ListNode = result;

  while (l1 || l2) {
    let A: number = l1 ? l1.val : 0;
    let B: number = l2 ? l2.val : 0;
    let sum: number = A + B + carry;
    carry = sum > 9 ? 1 : 0;

    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  if (carry) {
    curr.next = new ListNode(carry);
  }

  return result.next;
}

const l1: ListNode = createNode([9, 9, 9, 9, 9]);
const l2: ListNode = createNode([9, 9, 9]);
const l3: ListNode = addTwoNumbers(l1, l2);
console.log(JSON.stringify(l3));
