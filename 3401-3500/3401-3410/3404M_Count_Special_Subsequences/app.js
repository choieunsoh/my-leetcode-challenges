// 3404. Count Special Subsequences
// https://leetcode.com/problems/count-special-subsequences/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function (nums) {
  const n = nums.length;
  let result = 0;
  const counts = new Map();
  for (let r = 3; r < n - 2; ++r) {
    const q = r - 2;
    for (let p = 0; p < q - 1; ++p) {
      const key = (1.0 * nums[p]) / nums[q];
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    for (let s = r + 2; s < n; ++s) {
      const key = (1.0 * nums[s]) / nums[r];
      result += counts.get(key) ?? 0;
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 3, 6, 1];
var expected = 1;
var result = numberOfSubsequences(nums);
console.log(result, result === expected);

var nums = [3, 4, 3, 4, 3, 4, 3, 4];
var expected = 3;
var result = numberOfSubsequences(nums);
console.log(result, result === expected);
