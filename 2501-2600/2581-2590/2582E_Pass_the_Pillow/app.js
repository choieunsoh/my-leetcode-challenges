// 2582. Pass the Pillow
// https://leetcode.com/problems/pass-the-pillow/
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  for (let i = n - 1; i > 1; i--) {
    nums.push(i);
  }
  return nums[time % nums.length];
};

var n = 4,
  time = 5;
var expected = 2;
var result = passThePillow(n, time);
console.log(result, result === expected);

var n = 4,
  time = 6;
var expected = 1;
var result = passThePillow(n, time);
console.log(result, result === expected);

var n = 3,
  time = 2;
var expected = 3;
var result = passThePillow(n, time);
console.log(result, result === expected);

var n = 18,
  time = 38;
var expected = 5;
var result = passThePillow(n, time);
console.log(result, result === expected);
