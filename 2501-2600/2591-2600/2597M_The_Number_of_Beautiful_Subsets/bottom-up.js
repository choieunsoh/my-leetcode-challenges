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
    const n = subsets.length;
    subsets.sort((a, b) => a[0] - b[0]);
    const counts = new Array(n + 1).fill(0);
    counts[n] = 1;
    for (let i = n - 1; i >= 0; i--) {
      const skipCount = counts[i + 1];
      let takeCount = (1 << subsets[i][1]) - 1;

      if (i + 1 < n && subsets[i + 1][0] - subsets[i][0] === k) {
        takeCount *= counts[i + 2];
      } else {
        takeCount *= counts[i + 1];
      }
      counts[i] = skipCount + takeCount;
    }
    totalCount *= counts[0];
  }

  return totalCount - 1;
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
