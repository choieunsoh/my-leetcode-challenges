// 1099. Two Sum Less Than K
// https://leetcode.com/problems/two-sum-less-than-k/
// T.C.: O(m + m)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
  const count = new Array(1001).fill(0);
  for (const num of nums) {
    count[num]++;
  }

  let left = 0;
  let right = 1000;
  let result = -1;
  while (left <= right) {
    const sum = left + right;
    if (sum >= k || count[right] === 0) {
      right--;
    } else {
      const needed = left < right ? 0 : 1;
      if (count[left] > needed) {
        result = Math.max(result, sum);
      }
      left++;
    }
  }
  return result;
};

var nums = [34, 23, 1, 24, 75, 33, 54, 8],
  k = 60;
var expected = 58;
var result = twoSumLessThanK(nums, k);
console.log(result, result === expected);

var nums = [10, 20, 30],
  k = 15;
var expected = -1;
var result = twoSumLessThanK(nums, k);
console.log(result, result === expected);
