// https://leetcode.com/problems/contains-duplicate-ii/
// 219. Contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen.has(num)) {
      const j = seen.get(num);
      if (Math.abs(i - j) <= k) return true;
    }

    seen.set(num, i);
  }
  return false;
};

var nums = [1, 2, 3, 1],
  k = 3;
var expected = true;
var result = containsNearbyDuplicate(nums, k);
console.log(result, expected);

var nums = [1, 0, 1, 1],
  k = 1;
var expected = true;
var result = containsNearbyDuplicate(nums, k);
console.log(result, expected);

var nums = [1, 2, 3, 1, 2, 3],
  k = 2;
var expected = false;
var result = containsNearbyDuplicate(nums, k);
console.log(result, expected);
