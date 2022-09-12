// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
// 1588. Sum of All Odd Length Subarrays
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  const n = arr.length;
  const prefix = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
    sum += arr[i];
  }

  for (let length = 3; length < prefix.length; length += 2) {
    let start = 0;
    while (start + length < prefix.length) {
      const value = prefix[start + length] - prefix[start];
      sum += value;
      start++;
    }
  }
  return sum;
};

var arr = [1, 4, 2, 5, 3];
var expected = 58;
var result = sumOddLengthSubarrays(arr);
console.log(result, expected, result === expected);

var arr = [1, 2];
var expected = 3;
var result = sumOddLengthSubarrays(arr);
console.log(result, expected, result === expected);

var arr = [10, 11, 12];
var expected = 66;
var result = sumOddLengthSubarrays(arr);
console.log(result, expected, result === expected);
