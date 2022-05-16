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

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists1 = (curr1, curr2) => {
  let result = new ListNode(0);
  let curr = result;
  while (true) {
    if (curr1 === null) {
      curr.next = curr2;
      break;
    }
    if (curr2 === null) {
      curr.next = curr1;
      break;
    }

    if (curr1.val <= curr2.val) {
      curr.next = curr1;
      curr1 = curr1.next;
    } else {
      curr.next = curr2;
      curr2 = curr2.next;
    }

    curr = curr.next;
  }

  return result.next;
};
var mergeTwoLists = (list1, list2) => {
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

var list1 = [1, 2, 4];
var list2 = [1, 3, 4];

var x1 = createList(list1);
var x2 = createList(list2);
//console.log(x1);
//console.log(x2);
var x3 = mergeTwoLists(x1, x2);
console.log(printList(x3));
