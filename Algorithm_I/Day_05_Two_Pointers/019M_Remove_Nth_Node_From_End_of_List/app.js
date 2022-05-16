var node = null;
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var createNode = (val) => {
  let newNode = new ListNode(val);
  if (node === null) {
    node = newNode;
  } else {
    let current = node;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
};
var createListNode = (val) => {
  for (let i = 0; i < val.length; i++) {
    createNode(val[i]);
  }
};
var printListNode = (node) => {
  let nums = [];
  while (node) {
    nums.push(node.val);
    node = node.next;
  }
  console.log(nums.join(" "));
};

var removeNthFromEnd = function (head, n) {
  const findIndex = (head) => {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count + 1 - n;
  };
  const x = findIndex(head);
  if (x === 1 && head.next === null) {
    return null;
  }
  if (x === 1) {
    head = head.next;
  } else {
    let current = head;
    let prev = head;
    let index = 1;
    while (current.next && index !== x) {
      prev = current;
      current = current.next;
      index++;
    }
    prev.next = current.next;
  }
  return head;
};

var head = [1, 2, 3, 4, 5],
  n = 2;
head = [1, 2];
n = 2;
createListNode(head);
var x = removeNthFromEnd(node, n);
printListNode(x);
