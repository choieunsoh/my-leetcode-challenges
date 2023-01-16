// 2537. Count the Number of Good Subarrays
// https://leetcode.com/problems/count-the-number-of-good-subarrays/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  const n = nums.length;
  let left = 0;
  let right = 0;
  let count = 0;
  let result = 0;
  const map = new Map();
  while (right < n) {
    const rightCount = map.get(nums[right]) ?? 0;
    map.set(nums[right], rightCount + 1);
    count += rightCount;
    while (left < right && count >= k) {
      result += n - right;
      const leftCount = map.get(nums[left]) - 1;
      map.set(nums[left], leftCount);
      count -= leftCount;
      left++;
    }
    right++;
  }

  return result;
};

var nums = [1, 1, 1, 1, 1],
  k = 10;
var expected = 1;
var result = countGood(nums, k);
console.log(result, result === expected);

var nums = [3, 1, 4, 3, 2, 2, 4],
  k = 2;
var expected = 4;
var result = countGood(nums, k);
console.log(result, result === expected);
