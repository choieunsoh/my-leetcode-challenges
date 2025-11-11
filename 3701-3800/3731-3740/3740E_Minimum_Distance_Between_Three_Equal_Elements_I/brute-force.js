// 3740. Minimum Distance Between Three Equal Elements I
// https://leetcode.com/problems/minimum-distance-between-three-equal-elements-i/
// T.C.: O(n^3)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function (nums) {
  let distance = Infinity;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] === nums[j] && nums[j] === nums[k]) {
          const dist = Math.abs(i - j) + Math.abs(j - k) + Math.abs(k - i);
          distance = Math.min(distance, dist);
        }
      }
    }
  }
  return distance === Infinity ? -1 : distance;
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
