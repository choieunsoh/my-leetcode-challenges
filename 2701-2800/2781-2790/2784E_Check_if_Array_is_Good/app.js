// 2784. Check if Array is Good
// https://leetcode.com/problems/check-if-array-is-good/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
  const n = nums.length - 1;
  const counter = new Map();
  for (const num of nums) {
    const count = counter.get(num) ?? 0;
    counter.set(num, count + 1);
  }

  const countN = counter.get(n) ?? 0;
  if (countN !== 2) return false;

  for (let i = 1; i < n; i++) {
    if (!counter.has(i)) return false;
  }
  return true;
};

var nums = [1, 2, 3, 3];
var expected = true;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 1, 2, 4, 4];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 1];
var expected = true;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [9, 9];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);

var nums = [1, 4, 5, 4, 3, 3];
var expected = false;
var result = isGood(nums);
console.log(result, result === expected);
