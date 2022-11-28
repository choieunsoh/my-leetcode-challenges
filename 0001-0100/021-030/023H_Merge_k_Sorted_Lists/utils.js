var ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};
var createList = function (list) {
  let head = null;
  if (list.length === 0) return head;

  head = new ListNode(list[0]);
  let curr = head;
  for (let i = 1; i < list.length; i++) {
    const node = new ListNode(list[i]);
    curr.next = node;
    curr = curr.next;
  }
  return head;
};
var toArray = function (list) {
  const array = [];
  while (list) {
    array.push(list.val);
    list = list.next;
  }
  return array;
};
var printList = function (list) {
  const array = toArray(list);
  console.log(array.join(' '));
};
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = new ListNode(curr.val);
    if (prev) next.next = prev.next;
    prev = new ListNode(0);
    prev.next = next;
    curr = curr.next;
  }

  return prev ? prev.next : null;
};
var countList = function (head) {
  let p = head;
  let k = 0;
  while (p != null) {
    p = p.next;
    k++;
  }
  return k;
};
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

module.exports = {
  ListNode,
  countList,
  createList,
  mergeTwoLists,
  toArray,
  printList,
  reverseList,
};
