// 1588. Sum of All Odd Length Subarrays
// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let sub_sum = 0;
    for (let j = i; j < arr.length; j++) {
      sub_sum += arr[j];
      if ((j - i + 1) & 1) sum += sub_sum;
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
