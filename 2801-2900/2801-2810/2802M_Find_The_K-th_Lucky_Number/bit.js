// 2802. Find The K-th Lucky Number
// https://leetcode.com/problems/find-the-k-th-lucky-number/description/
// T.C.: O(log k)
// S.C.: O(1)
/**
 * @param {number} k
 * @return {string}
 */
var kthLuckyNumber = function (k) {
  let result = '';
  let index = k + 1;
  while (index > 1) {
    const digit = index & 1 ? '7' : '4';
    result = digit + result;
    index >>= 1;
  }
  return result;
};

var k = 1;
var expected = '4';
var result = kthLuckyNumber(k);
console.log(result, result === expected);

var k = 2;
var expected = '7';
var result = kthLuckyNumber(k);
console.log(result, result === expected);

var k = 4;
var expected = '47';
var result = kthLuckyNumber(k);
console.log(result, result === expected);

var k = 6;
var expected = '77';
var result = kthLuckyNumber(k);
console.log(result, result === expected);

var k = 10;
var expected = '477';
var result = kthLuckyNumber(k);
console.log(result, result === expected);

var k = 1000;
var expected = '777747447';
var result = kthLuckyNumber(k);
console.log(result, result === expected);
