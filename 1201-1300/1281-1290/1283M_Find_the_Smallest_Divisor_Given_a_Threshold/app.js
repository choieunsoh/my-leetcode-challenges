// 1283. Find the Smallest Divisor Given a Threshold
// https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let result = 0;
  let left = 0;
  let right = nums.reduce((sum, num) => sum + num, 0);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = countByDivisor(mid);
    if (count <= threshold) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function countByDivisor(divisor) {
    let count = 0;
    for (const num of nums) {
      count += Math.ceil(num / divisor);
    }
    return count;
  }
};

var nums = [1, 2, 5, 9],
  threshold = 6;
var expected = 5;
var result = smallestDivisor(nums, threshold);
console.log(result, result === expected);

var nums = [44, 22, 33, 11, 1],
  threshold = 5;
var expected = 44;
var result = smallestDivisor(nums, threshold);
console.log(result, result === expected);
