// 354. Russian Doll Envelopes
// https://leetcode.com/problems/russian-doll-envelopes/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
  const dp = [envelopes[0][1]];
  for (let i = 1; i < envelopes.length; i++) {
    const height = envelopes[i][1];
    if (height > dp.at(-1)) {
      dp.push(height);
    } else {
      const replaceIndex = binarySearch(dp, height);
      dp[replaceIndex] = height;
    }
  }
  return dp.length;

  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] === target) return mid;
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};

var envelopes = [
  [5, 4],
  [6, 4],
  [6, 7],
  [2, 3],
];
var expected = 3;
var result = maxEnvelopes(envelopes);
console.log(result, result === expected);

var envelopes = [
  [1, 1],
  [1, 1],
  [1, 1],
];
var expected = 1;
var result = maxEnvelopes(envelopes);
console.log(result, result === expected);
