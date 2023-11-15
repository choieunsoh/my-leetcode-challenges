// 1846. Maximum Element After Decreasing and Rearranging
// https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  let result = 1;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result) result++;
  }
  return result;
};

var arr = [2, 2, 1, 2, 1];
var expected = 2;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);

var arr = [100, 1, 1000];
var expected = 3;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);

var arr = [1, 2, 3, 4, 5];
var expected = 5;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);

var arr = new Array(1e4).fill(209);
arr[arr.length - 1] = 210;
var expected = 210;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);

var arr = new Array(209).fill(209);
arr[arr.length - 1] = 209;
var expected = 209;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);

var arr = new Array(210).fill(209);
arr[0] = 211;
var expected = 210;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);

var arr = [73, 98, 9];
var expected = 3;
var result = maximumElementAfterDecrementingAndRearranging(arr);
console.log(result, result === expected);
