const listNode = (nums) => {
  let result = {};
  if (nums.length > 0) {
    result.val = nums.splice(0, 1)[0];
    result.next = listNode(nums);
  } else {
    result = null;
  }
  return result;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbersV1 = (l1, l2) => {
  const result = new ListNode();
  let node = result;
  let C = 0;
  while (l1 || l2) {
    const A = l1 ? l1.val : 0;
    const B = l2 ? l2.val : 0;
    let sum = A + B + C;
    C = sum > 9 ? 1 : 0;

    node.next = new ListNode(sum % 10, null);
    node = node.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (C) node.next = new ListNode(C);
  return result.next;
};

const addTwoNumbers = (l1, l2, carry = 0) => {
  if (l1 === null && l2 === null) {
    return carry ? new ListNode(carry) : null;
  } else {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    if (sum > 9) {
      return new ListNode(
        sum % 10,
        addTwoNumbers(l1?.next ?? null, l2?.next ?? null, 1)
      );
    } else {
      return new ListNode(
        sum % 10,
        addTwoNumbers(l1?.next ?? null, l2?.next ?? null)
      );
    }
  }
};

const l1 = listNode([9, 9, 9, 9, 9, 9, 9]);
const l2 = listNode([9, 9, 9, 9]);
const l11 = listNode([2, 4, 3]);
const l21 = listNode([5, 6, 4]);

//console.log(l2);
console.log(JSON.stringify(addTwoNumbers(l11, l21)));
