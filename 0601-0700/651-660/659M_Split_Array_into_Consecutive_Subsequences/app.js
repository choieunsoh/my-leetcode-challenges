// 659. Split Array into Consecutive Subsequences
// https://leetcode.com/problems/split-array-into-consecutive-subsequences/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const groups = [[nums[0], 1]];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    for (let j = groups.length - 1; j >= 0; j--) {
      const [prevNum, size] = groups[j];
      if (prevNum + 1 === num) {
        groups[j] = [num, size + 1];
        j = -1;
      } else if (prevNum + 1 < num && size < 3) {
        return false;
      } else if (j === 0) {
        groups.push([num, 1]);
      }
    }
  }
  for (const [, size] of groups) {
    if (size < 3) return false;
  }
  return true;
};

var nums = [1, 2, 3, 3, 4, 5];
var expected = true;
var result = isPossible(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 3, 4, 4, 5, 5];
var expected = true;
var result = isPossible(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 4, 5];
var expected = false;
var result = isPossible(nums);
console.log(result, result === expected);
