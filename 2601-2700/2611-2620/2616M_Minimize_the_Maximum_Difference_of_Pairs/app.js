// 2616. Minimize the Maximum Difference of Pairs
// https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let left = 0;
  let right = nums[n - 1] - nums[0];
  let result = 0;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const possiblePairs = countPairs(mid);
    if (possiblePairs >= p) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function countPairs(min) {
    let count = 0;
    for (let i = 1; i < n; i++) {
      if (nums[i] - nums[i - 1] <= min) {
        count++;
        i++;
      }
    }
    return count;
  }
};

var nums = [10, 1, 2, 7, 1, 3],
  p = 2;
var expected = 1;
var result = minimizeMax(nums, p);
console.log(result, result === expected);

var nums = [4, 2, 1, 2],
  p = 1;
var expected = 0;
var result = minimizeMax(nums, p);
console.log(result, result === expected);
