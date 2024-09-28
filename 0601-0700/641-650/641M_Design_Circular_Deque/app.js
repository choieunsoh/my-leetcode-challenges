// 641. Design Circular Deque
// https://leetcode.com/problems/design-circular-deque/description/
// T.C.: O(1)
// S.C.: O(k)
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.capacity = k;
  this.data = new Array(k);
  this.size = 0;
  this.frontIndex = 0;
  this.lastIndex = k - 1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;

  this.frontIndex = (this.frontIndex - 1 + this.capacity) % this.capacity;
  this.data[this.frontIndex] = value;
  this.size++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;

  this.lastIndex = (this.lastIndex + 1) % this.capacity;
  this.data[this.lastIndex] = value;
  this.size++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;

  this.data[this.frontIndex] = undefined;
  this.frontIndex = (this.frontIndex + 1) % this.capacity;
  this.size--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;

  this.data[this.lastIndex] = undefined;
  this.lastIndex = (this.lastIndex - 1 + this.capacity) % this.capacity;
  this.size--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.data[this.frontIndex];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.data[this.lastIndex];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.size === this.capacity;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
function run(ops, inputs, outputs) {
  var obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'MyCircularDeque') {
      obj = new MyCircularDeque(...args);
    } else {
      const result = obj[ops[i]](...args);
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

var ops = [
    'MyCircularDeque',
    'insertLast',
    'insertLast',
    'insertFront',
    'insertFront',
    'getRear',
    'isFull',
    'deleteLast',
    'insertFront',
    'getFront',
  ],
  inputs = [[3], [1], [2], [3], [4], [], [], [], [4], []];
var outputs = [null, true, true, true, false, 2, true, true, true, 4];
run(ops, inputs, outputs);

var ops = [
    'MyCircularDeque',
    'insertFront',
    'getRear',
    'deleteLast',
    'getRear',
    'insertFront',
    'insertFront',
    'insertFront',
    'insertFront',
    'isFull',
    'insertFront',
    'isFull',
    'getRear',
    'deleteLast',
    'getFront',
    'getFront',
    'insertLast',
    'deleteFront',
    'getFront',
    'insertLast',
    'getRear',
    'insertLast',
    'getRear',
    'getFront',
    'getFront',
    'getFront',
    'getRear',
    'getRear',
    'insertFront',
    'getFront',
    'getFront',
    'getFront',
    'getFront',
    'deleteFront',
    'insertFront',
    'getFront',
    'deleteLast',
    'insertLast',
    'insertLast',
    'getRear',
    'getRear',
    'getRear',
    'isEmpty',
    'insertFront',
    'deleteLast',
    'getFront',
    'deleteLast',
    'getRear',
    'getFront',
    'isFull',
    'isFull',
    'deleteFront',
    'getFront',
    'deleteLast',
    'getRear',
    'insertFront',
    'getFront',
    'insertFront',
    'insertFront',
    'getRear',
    'isFull',
    'getFront',
    'getFront',
    'insertFront',
    'insertLast',
    'getRear',
    'getRear',
    'deleteLast',
    'insertFront',
    'getRear',
    'insertLast',
    'getFront',
    'getFront',
    'getFront',
    'getRear',
    'insertFront',
    'isEmpty',
    'getFront',
    'getFront',
    'insertFront',
    'deleteFront',
    'insertFront',
    'deleteLast',
    'getFront',
    'getRear',
    'getFront',
    'insertFront',
    'getFront',
    'deleteFront',
    'insertFront',
    'isEmpty',
    'getRear',
    'getRear',
    'getRear',
    'getRear',
    'deleteFront',
    'getRear',
    'isEmpty',
    'deleteFront',
    'insertFront',
    'insertLast',
    'deleteLast',
  ],
  inputs = [
    [77],
    [89],
    [],
    [],
    [],
    [19],
    [23],
    [23],
    [82],
    [],
    [45],
    [],
    [],
    [],
    [],
    [],
    [74],
    [],
    [],
    [98],
    [],
    [99],
    [],
    [],
    [],
    [],
    [],
    [],
    [8],
    [],
    [],
    [],
    [],
    [],
    [75],
    [],
    [],
    [35],
    [59],
    [],
    [],
    [],
    [],
    [22],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [21],
    [],
    [26],
    [63],
    [],
    [],
    [],
    [],
    [87],
    [76],
    [],
    [],
    [],
    [26],
    [],
    [67],
    [],
    [],
    [],
    [],
    [36],
    [],
    [],
    [],
    [72],
    [],
    [87],
    [],
    [],
    [],
    [],
    [85],
    [],
    [],
    [91],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [34],
    [44],
    [],
  ];
var outputs = [
  null,
  true,
  89,
  true,
  -1,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  19,
  true,
  45,
  45,
  true,
  true,
  82,
  true,
  98,
  true,
  99,
  82,
  82,
  82,
  99,
  99,
  true,
  8,
  8,
  8,
  8,
  true,
  true,
  75,
  true,
  true,
  true,
  59,
  59,
  59,
  false,
  true,
  true,
  22,
  true,
  98,
  22,
  false,
  false,
  true,
  75,
  true,
  74,
  true,
  21,
  true,
  true,
  74,
  false,
  63,
  63,
  true,
  true,
  76,
  76,
  true,
  true,
  74,
  true,
  26,
  26,
  26,
  67,
  true,
  false,
  36,
  36,
  true,
  true,
  true,
  true,
  87,
  74,
  87,
  true,
  85,
  true,
  true,
  false,
  74,
  74,
  74,
  74,
  true,
  74,
  false,
  true,
  true,
  true,
  true,
];
run(ops, inputs, outputs);
