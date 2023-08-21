// 2826. Sorting Three Groups
// https://leetcode.com/problems/sorting-three-groups/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const n = nums.length;
  let result = n;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      let curr = 0;
      for (let k = 0; k < n; k++) {
        if (k < i) {
          if (nums[k] !== 1) curr++;
        } else if (k < j) {
          if (nums[k] !== 2) curr++;
        } else {
          if (nums[k] !== 3) curr++;
        }
      }
      result = Math.min(result, curr);
    }
  }
  return result;
};

var nums = [2, 1, 3, 2, 1];
var expected = 3;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [1, 3, 2, 1, 3, 3];
var expected = 2;
var result = minimumOperations(nums);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 3, 3];
var expected = 0;
var result = minimumOperations(nums);
console.log(result, result === expected);
