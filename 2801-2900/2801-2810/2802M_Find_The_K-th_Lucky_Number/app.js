// 2802. Find The K-th Lucky Number
// https://leetcode.com/problems/find-the-k-th-lucky-number/description/
// T.C.: O(log k)
// S.C.: O(1)
/**
 * @param {number} k
 * @return {string}
 */
var kthLuckyNumber = function (k) {
  let count = 0;
  let base2 = 2;
  let groupIndex = 0;
  while (count < k) {
    if (count + base2 >= k) {
      groupIndex = k - count;
    }
    count += base2;
    base2 *= 2;
  }
  const n = Math.log2(base2) - 1;
  const num = (groupIndex - 1).toString(2).padStart(n, '0');
  return num.replace(/0/g, '4').replace(/1/g, '7');
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
