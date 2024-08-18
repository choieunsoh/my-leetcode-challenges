// 264. Ugly Number II
// https://leetcode.com/problems/ugly-number-ii/
// T.C.: O(n log m)
// S.C.: O(m)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  const uglySet = new Set([1]);
  const uglyHeap = new MinPriorityQueue();
  uglyHeap.enqueue(1);
  let currentUgly = 1;
  for (let i = 0; i < n; i++) {
    currentUgly = uglyHeap.dequeue();
    appendUglyNumber(currentUgly * 2);
    appendUglyNumber(currentUgly * 3);
    appendUglyNumber(currentUgly * 5);
  }
  return currentUgly;

  function appendUglyNumber(num) {
    if (uglySet.has(num)) return;
    uglySet.add(num);
    uglyHeap.enqueue(num);
  }
};

var n = 10;
var expected = 12;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 1;
var expected = 1;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 20;
var expected = 36;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 100;
var expected = 1536;
var result = nthUglyNumber(n);
console.log(result, result === expected);

var n = 1690;
var expected = 2123366400;
var result = nthUglyNumber(n);
console.log(result, result === expected);
