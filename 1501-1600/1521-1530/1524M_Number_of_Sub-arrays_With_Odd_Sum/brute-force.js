// 1524. Number of Sub-arrays With Odd Sum
// https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;
  let count = 0;
  for (let startIndex = 0; startIndex < n; startIndex++) {
    let currentSum = 0;
    for (let endIndex = startIndex; endIndex < n; endIndex++) {
      currentSum += arr[endIndex];
      if (currentSum % 2 !== 0) {
        count++;
      }
    }
  }
  return count % MOD;
};

var arr = [1, 3, 5];
var expected = 4;
var result = numOfSubarrays(arr);
console.log(result, result === expected);

var arr = [2, 4, 6];
var expected = 0;
var result = numOfSubarrays(arr);
console.log(result, result === expected);

var arr = [1, 2, 3, 4, 5, 6, 7];
var expected = 16;
var result = numOfSubarrays(arr);
console.log(result, result === expected);
