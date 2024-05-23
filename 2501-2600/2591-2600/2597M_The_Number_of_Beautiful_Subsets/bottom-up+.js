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
    let prevNum = -k;
    let prev2Count = 0;
    let prev1Count = 1;
    let currCount = 1;

    const values = Array.from(value);
    values.sort((a, b) => a[0] - b[0]);
    for (const [num, count] of values) {
      const skipCount = prev1Count;
      let takeCount = 0;
      if (num - prevNum === k) {
        takeCount = ((1 << count) - 1) * prev2Count;
      } else {
        takeCount = ((1 << count) - 1) * prev1Count;
      }

      currCount = skipCount + takeCount;
      prev2Count = prev1Count;
      prev1Count = currCount;
      prevNum = num;
    }

    totalCount *= currCount;
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
