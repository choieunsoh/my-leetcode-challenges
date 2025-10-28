// 1995. Count Special Quadruplets
// https://leetcode.com/problems/count-special-quadruplets/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
  const count = new Map();
  const n = nums.length;
  const d = nums[n - 1];
  const c = nums[n - 2];
  count.set(d - c, 1);
  let result = 0;
  for (let bIndex = n - 3; bIndex >= 1; bIndex--) {
    for (let aIndex = bIndex - 1; aIndex >= 0; aIndex--) {
      const a = nums[aIndex];
      const b = nums[bIndex];
      result += count.get(a + b) ?? 0;
    }

    for (let xIndex = n - 1; xIndex > bIndex; xIndex--) {
      const x = nums[xIndex];
      const b = nums[bIndex];
      count.set(x - b, (count.get(x - b) ?? 0) + 1);
    }
  }
  return result;
};

var nums = [1, 2, 3, 6];
var expected = 1;
var result = countQuadruplets(nums);
console.log(result, result === expected);

var nums = [3, 3, 6, 4, 5];
var expected = 0;
var result = countQuadruplets(nums);
console.log(result, result === expected);

var nums = [1, 1, 1, 3, 5];
var expected = 4;
var result = countQuadruplets(nums);
console.log(result, result === expected);
