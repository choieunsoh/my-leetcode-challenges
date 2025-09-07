// 1304. Find N Unique Integers Sum up to Zero
// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  const result = [];
  for (let i = (n / 2) | 0; i > 0; i--) {
    result.push(-i);
  }
  if (n % 2 === 1) {
    result.push(0);
  }
  for (let i = 1; i <= n / 2; i++) {
    result.push(i);
  }
  return result;
};

var n = 5;
var expected = [-7, -1, 1, 3, 4];
var result = sumZero(n);
console.log(result, result.join() === expected.join());

var n = 3;
var expected = [-1, 0, 1];
var result = sumZero(n);
console.log(result, result.join() === expected.join());

var n = 1;
var expected = [0];
var result = sumZero(n);
console.log(result, result.join() === expected.join());
