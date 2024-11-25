// 1228. Missing Number In Arithmetic Progression
// https://leetcode.com/problems/missing-number-in-arithmetic-progression/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function (arr) {
  const n = arr.length;
  const step = (arr[n - 1] - arr[0]) / n;
  if (step === 0) return arr[0];

  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] === step) continue;
    return arr[i] - step;
  }
  return 0;
};

var arr = [5, 7, 11, 13];
var expected = 9;
var result = missingNumber(arr);
console.log(result, result === expected);

var arr = [15, 13, 12];
var expected = 14;
var result = missingNumber(arr);
console.log(result, result === expected);

var arr = [100, 300, 400];
var expected = 200;
var result = missingNumber(arr);
console.log(result, result === expected);

var arr = [80387, 68178, 55969, 31551];
var expected = 43760;
var result = missingNumber(arr);
console.log(result, result === expected);

var arr = [1, 1, 1];
var expected = 1;
var result = missingNumber(arr);
console.log(result, result === expected);
