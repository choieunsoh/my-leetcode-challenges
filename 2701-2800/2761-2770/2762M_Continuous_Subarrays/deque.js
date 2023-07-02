// 2762. Continuous Subarrays
// https://leetcode.com/problems/continuous-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  const n = nums.length;
  const queueDec = new Deque();
  const queueInc = new Deque();
  let result = 0;
  let decIndex = 0;
  let incIndex = 0;
  for (let i = 0; i < n; i++) {
    // pop out elements from the back of the queues to maintain the monotonic decreasing and increasing properties
    while (!queueDec.isEmpty() && nums[queueDec.back()] < nums[i]) queueDec.pop();
    while (!queueInc.isEmpty() && nums[queueInc.back()] > nums[i]) queueInc.pop();
    // pop out elements from the front of the queue that are out of range
    while (!queueDec.isEmpty() && nums[queueDec.front()] > nums[i] + 2) {
      decIndex = queueDec.front() + 1;
      queueDec.popLeft();
    }
    while (!queueInc.isEmpty() && nums[queueInc.front()] < nums[i] - 2) {
      incIndex = queueInc.front() + 1;
      queueInc.popLeft();
    }
    const count = i - Math.max(incIndex, decIndex) + 1;
    result += count;
    queueDec.push(i);
    queueInc.push(i);
  }
  return result;
};

class Deque {
  constructor() {
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
    this.size++;
  }
  popLeft() {
    const head = this.head.next;
    this.removeNode(head);
    this.size--;
    return head.val;
  }
  pop() {
    const tail = this.tail.prev;
    this.removeNode(tail);
    this.size--;
    return tail.val;
  }
  removeNode(node) {
    if (!node.prev && !node.next) return;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
  front() {
    return this.head.next.val;
  }
  back() {
    return this.tail.prev.val;
  }
  isEmpty() {
    return this.size === 0;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

var nums = [65, 66, 67, 66, 66, 65, 64, 65, 65, 64];
var expected = 43;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [5, 4, 2, 4];
var expected = 8;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [1, 2, 3];
var expected = 6;
var result = continuousSubarrays(nums);
console.log(result, result === expected);

var nums = [31, 30, 31, 32];
var expected = 10;
var result = continuousSubarrays(nums);
console.log(result, result === expected);
