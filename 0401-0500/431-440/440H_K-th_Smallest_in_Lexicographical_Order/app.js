// 440. K-th Smallest in Lexicographical Order
// https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/
// T.C.: O((log n)^2)
// S.C.: O(log n)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let currNum = 1;
  k--;
  while (k > 0) {
    const step = countBetween(n, currNum, currNum + 1);
    if (step <= k) {
      currNum++;
      k -= step;
    } else {
      currNum *= 10;
      k--;
    }
  }
  return currNum;

  function countBetween(limit, leftNum, rightNum) {
    let count = 0;
    while (leftNum <= limit) {
      count += Math.min(limit + 1, rightNum) - leftNum;
      leftNum *= 10;
      rightNum *= 10;
    }
    return count;
  }
};

var n = 13,
  k = 2;
var expected = 10;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 1,
  k = 1;
var expected = 1;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 111,
  k = 3;
var expected = 100;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 111,
  k = 4;
var expected = 101;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 111,
  k = 14;
var expected = 110;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 111,
  k = 15;
var expected = 111;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 111,
  k = 16;
var expected = 12;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 681692778,
  k = 351251360;
var expected = 416126219;
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 957747794,
  k = 424238336;
var expected = 481814499;
var result = findKthNumber(n, k);
console.log(result, result === expected);
