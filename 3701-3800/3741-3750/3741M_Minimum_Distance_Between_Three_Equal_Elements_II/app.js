// 3741. Minimum Distance Between Three Equal Elements II
// https://leetcode.com/problems/minimum-distance-between-three-equal-elements-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  const n = nums.length;
  const next = Array.from({ length: n }).fill(-1);
  const occur = new Map();
  let result = n + 1;

  for (let i = n - 1; i >= 0; i--) {
    if (occur.has(nums[i])) {
      next[i] = occur.get(nums[i]);
    }
    occur.set(nums[i], i);
  }

  for (let firstPos = 0; firstPos < n; firstPos++) {
    const secondPos = next[firstPos];
    const thirdPos = next[secondPos];
    if (secondPos !== -1 && thirdPos !== -1) {
      result = Math.min(result, thirdPos - firstPos);
    }
  }

  if (result === n + 1) {
    return -1;
  }

  return result * 2;
};

var nums = [1, 2, 1, 1, 3];
var expected = 6;
var result = minimumDistance(nums);
console.log(result, result === expected);

var nums = [1, 1, 2, 3, 2, 1, 2];
var expected = 8;
var result = minimumDistance(nums);
console.log(result, result === expected);

var nums = [1];
var expected = -1;
var result = minimumDistance(nums);
console.log(result, result === expected);
