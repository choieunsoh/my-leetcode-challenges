function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var createList = (list) => {
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
var printList = (list) => {
  const x = [];
  while (list) {
    x.push(list.val);
    list = list.next;
  }
  console.log(x.join(" "));
};
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = new ListNode(curr.val);
    if (prev) next.next = prev.next;
    prev = new ListNode(0);
    prev.next = next;
    //console.log(next);
    curr = curr.next;
  }

  return prev?.next || [];
};
var head = [1, 2, 3, 4, 5];
head = [];
var reverse = reverseList(createList(head));
console.log(printList(reverse));
