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

var middleNode = function (head) {
  const size = (head) => {
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  };
  const N = size(head);
  const mid = Math.floor(N / 2) + 1;

  if (mid === 1) {
    return head;
  } else {
    let index = 1;
    while (head && index < mid) {
      index++;
      head = head.next;
    }
    return head;
  }
};

var head = [1, 2, 3, 4, 5, 6];
createListNode(head);
printListNode(node);
var result = middleNode(node);
printListNode(result);
