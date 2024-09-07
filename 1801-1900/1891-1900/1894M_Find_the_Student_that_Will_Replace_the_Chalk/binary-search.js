// 1894. Find the Student that Will Replace the Chalk
// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const n = chalk.length;
  const prefixSum = new Array(n).fill(0);
  prefixSum[0] = chalk[0];
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + chalk[i];
  }
  const totalChalk = prefixSum[n - 1];
  k %= totalChalk;

  return binarySearch(prefixSum, k);

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let index = right;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (arr[mid] > target) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }
};

var chalk = [5, 1, 5],
  k = 22;
var expected = 0;
var result = chalkReplacer(chalk, k);
console.log(result, result === expected);

var chalk = [3, 4, 1, 2],
  k = 25;
var expected = 1;
var result = chalkReplacer(chalk, k);
console.log(result, result === expected);
