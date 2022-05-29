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
var printList = function (list) {
  const x = [];
  while (list) {
    x.push(list.val);
    list = list.next;
  }
  console.log(x.join(' '));
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

module.exports = {
  ListNode,
  countList,
  createList,
  printList,
  reverseList,
};
