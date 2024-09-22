// 440. K-th Smallest in Lexicographical Order
// https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let result = 0;
  let count = 0;
  for (let i = 1; i <= 9 && count < k; i++) {
    generateNumber(i);
  }
  return result;

  function generateNumber(num) {
    if (num > n || count === k) return;

    result = num;
    count++;

    for (let i = 0; i <= 9 && count < k; i++) {
      const nextNum = num * 10 + i;
      if (nextNum > n) return;
      generateNumber(nextNum);
    }
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
var result = findKthNumber(n, k);
console.log(result, result === expected);

var n = 957747794,
  k = 424238336;
var result = findKthNumber(n, k);
console.log(result, result === expected);
