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
  const arraySize = nums.length;
  const maxNum = nums[nums.length - 1];
  const prefixCountSize = maxNum * 2;

  const prefixCount = new Array(prefixCountSize).fill(0);
  const valueCount = new Array(maxNum + 1).fill(0);

  let prefixIndex = 0;
  for (let value = 0; value < prefixCountSize; value++) {
    while (prefixIndex < arraySize && nums[prefixIndex] <= value) {
      prefixIndex++;
    }
    prefixCount[value] = prefixIndex;
  }
  for (let i = 0; i < arraySize; i++) {
    valueCount[nums[i]]++;
  }

  let left = 0;
  let right = maxNum;
  while (left <= right) {
    const mid = (left + right) >> 1;
    const count = countPairs(mid);
    if (count >= k) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function countPairs(maxDistance) {
    let count = 0;
    let index = 0;
    while (index < arraySize) {
      const currentValue = nums[index];
      const valueCountForCurrent = valueCount[currentValue];
      const pairsWithLargerValues =
        prefixCount[Math.min(currentValue + maxDistance, prefixCount.length - 1)] - prefixCount[currentValue];
      const pairsWithSameValues = (valueCountForCurrent * (valueCountForCurrent - 1)) / 2;
      count += pairsWithLargerValues * valueCountForCurrent + pairsWithSameValues;
      while (index + 1 < arraySize && nums[index] === nums[index + 1]) {
        index++;
      }
      index++;
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
