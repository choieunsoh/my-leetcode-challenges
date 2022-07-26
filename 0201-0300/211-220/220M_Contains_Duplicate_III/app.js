// https://leetcode.com/problems/contains-duplicate-iii/
// 220. Contains Duplicate III
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j <= i + k; j++) {
      if (j >= nums.length) break;
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
    }
  }
  return false;
};

var nums = [1, 2, 3, 1],
  k = 3,
  t = 0;
var expected = true;
console.log(containsNearbyAlmostDuplicate(nums, k, t), expected);

var nums = [1, 0, 1, 1],
  k = 1,
  t = 2;
var expected = true;
console.log(containsNearbyAlmostDuplicate(nums, k, t), expected);

var nums = [1, 5, 9, 1, 5, 9],
  k = 2,
  t = 3;
var expected = false;
console.log(containsNearbyAlmostDuplicate(nums, k, t), expected);
