// 3542. Minimum Operations to Convert All Elements to Zero
// https://leetcode.com/problems/minimum-operations-to-convert-all-elements-to-zero/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0;
  const stack = [];
  for (const num of nums) {
    while (stack.length && stack[stack.length - 1] > num) {
      stack.pop();
    }
    if (num === 0) continue;
    if (stack.length === 0 || stack[stack.length - 1] < num) {
      result++;
      stack.push(num);
    }
  }
  return result;
};

var nums = [0, 2];
var expected = 1;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [3, 1, 2, 1];
var expected = 3;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [1, 2, 1, 2, 1, 2];
var expected = 4;
var result = minOperations(nums);
console.log(result, result === expected);

var nums = [7, 2, 0, 4, 2];
var expected = 4;
var result = minOperations(nums);
console.log(result, result === expected);
