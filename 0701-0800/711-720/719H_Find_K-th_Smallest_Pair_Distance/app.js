// 719. Find K-th Smallest Pair Distance
// https://leetcode.com/problems/find-k-th-smallest-pair-distance
// T.C.: O(n log n + n log M)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  let result = 0;
  let left = 0;
  let right = nums[nums.length - 1] - nums[0];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = countPairsWithMaxDistance(mid);
    if (count >= k) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;

  function countPairsWithMaxDistance(mid) {
    let left = 0;
    let count = 0;
    for (let right = 0; right < nums.length; right++) {
      while (nums[right] - nums[left] > mid) left++;
      count += right - left;
    }
    return count;
  }
};

var nums = [1, 3, 1],
  k = 1;
var expected = 0;
var result = smallestDistancePair(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1],
  k = 2;
var expected = 0;
var result = smallestDistancePair(nums, k);
console.log(result, result === expected);

var nums = [1, 6, 1],
  k = 3;
var expected = 5;
var result = smallestDistancePair(nums, k);
console.log(result, result === expected);
