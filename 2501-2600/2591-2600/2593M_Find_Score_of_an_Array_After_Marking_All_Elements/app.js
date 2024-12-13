// 2593. Find Score of an Array After Marking All Elements
// https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function (nums) {
  const n = nums.length;
  let score = 0;
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (stack.length && nums[i] >= stack[stack.length - 1]) {
      let skip = false;
      while (stack.length) {
        const value = stack.pop();
        if (!skip) {
          score += value;
        }
        skip = !skip;
      }
      continue;
    }

    stack.push(nums[i]);
  }

  let skip = false;
  while (stack.length) {
    const value = stack.pop();
    if (!skip) {
      score += value;
    }
    skip = !skip;
  }

  return score;
};

var nums = [2, 1, 3, 4, 5, 2];
var expected = 7;
var result = findScore(nums);
console.log(result, result === expected);

var nums = [2, 3, 5, 1, 3, 2];
var expected = 5;
var result = findScore(nums);
console.log(result, result === expected);

var nums = [5, 1, 1, 7, 2, 4];
var expected = 3;
var result = findScore(nums);
console.log(result, result === expected);
