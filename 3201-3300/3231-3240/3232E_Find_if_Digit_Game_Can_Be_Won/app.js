// 3232. Find if Digit Game Can Be Won
// https://leetcode.com/problems/find-if-digit-game-can-be-won/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {
  let singleDigitSum = 0;
  let doubleDigitsSum = 0;
  for (const num of nums) {
    if (num < 10) {
      singleDigitSum += num;
    } else {
      doubleDigitsSum += num;
    }
  }
  return singleDigitSum !== doubleDigitsSum;
};

var nums = [1, 2, 3, 4, 10];
var expected = false;
var result = canAliceWin(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 14];
var expected = true;
var result = canAliceWin(nums);
console.log(result, result === expected);

var nums = [5, 5, 5, 25];
var expected = true;
var result = canAliceWin(nums);
console.log(result, result === expected);
