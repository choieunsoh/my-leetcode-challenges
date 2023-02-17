// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let smallest = Number.MAX_VALUE;
  let small = Number.MAX_VALUE;
  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= small) {
      small = num;
    } else {
      return true;
    }
  }
  return false;
};

var nums = [1, 2, 3, 4, 5];
var expected = true;
var result = increasingTriplet(nums);
console.log(result, result === expected);

var nums = [5, 4, 3, 2, 1];
var expected = false;
var result = increasingTriplet(nums);
console.log(result, result === expected);

var nums = [2, 1, 5, 0, 4, 6];
var expected = true;
var result = increasingTriplet(nums);
console.log(result, result === expected);

var nums = [20, 100, 10, 12, 5, 13];
var expected = true;
var result = increasingTriplet(nums);
console.log(result, result === expected);

var nums = [2, 4, -2, -3];
var expected = false;
var result = increasingTriplet(nums);
console.log(result, result === expected);
