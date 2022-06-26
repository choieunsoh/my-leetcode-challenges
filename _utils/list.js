function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
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
  const x = [];
  while (list) {
    x.push(list.val);
    list = list.next;
  }
  return x;
};
var printList = function (list) {
  const x = toArray(list);
  console.log(x.join(' '));
};

module.exports = {
  ListNode,
  createList,
  toArray,
  printList,
};
