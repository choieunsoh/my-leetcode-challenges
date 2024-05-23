// 2597. The Number of Beautiful Subsets
// https://leetcode.com/problems/the-number-of-beautiful-subsets/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  let totalCount = 1;
  const freqMap = new Map();

  for (let num of nums) {
    const remainder = num % k;
    if (!freqMap.has(remainder)) {
      freqMap.set(remainder, new Map());
    }
    const counts = freqMap.get(remainder);
    counts.set(num, (counts.get(num) ?? 0) + 1);
  }

  for (const value of freqMap.values()) {
    const subsets = Array.from(value);
    subsets.sort((a, b) => a[0] - b[0]);
    const counts = new Array(subsets.length).fill(-1);
    totalCount *= countBeautifulSubsets(subsets, counts, 0);
  }

  return totalCount - 1;

  function countBeautifulSubsets(subsets, counts, index) {
    if (index === subsets.length) {
      return 1;
    }

    if (counts[index] !== -1) {
      return counts[index];
    }

    const skipCount = countBeautifulSubsets(subsets, counts, index + 1);
    let takeCount = (1 << subsets[index][1]) - 1;

    let skipOffset = 1;
    if (index + 1 < subsets.length && subsets[index + 1][0] - subsets[index][0] === k) {
      skipOffset = 2;
    }
    takeCount *= countBeautifulSubsets(subsets, counts, index + skipOffset);

    counts[index] = skipCount + takeCount;
    return counts[index];
  }
};

var nums = [10, 4, 5, 7, 2, 1],
  k = 3;
var expected = 23;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [2, 4, 6],
  k = 2;
var expected = 4;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [1],
  k = 1;
var expected = 1;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [4, 2, 5, 9, 10, 3],
  k = 1;
var expected = 23;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);
