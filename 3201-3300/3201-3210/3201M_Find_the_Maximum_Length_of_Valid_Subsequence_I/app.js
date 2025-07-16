// 3201. Find the Maximum Length of Valid Subsequence I
// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function (nums) {
  let oddLen = 0;
  let evenLen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenLen++;
    } else {
      oddLen++;
    }
  }

  let oddEvenLen = 1;
  let evenOddLen = 1;
  let oddEvenParity = 0;
  let evenOddParity = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === oddEvenParity && nums[i - 1] % 2 === (oddEvenParity + 1) % 2) {
      oddEvenLen++;
      oddEvenParity = (oddEvenParity + 1) % 2;
    }
    if (nums[i] % 2 === evenOddParity && nums[i - 1] % 2 === (evenOddParity + 1) % 2) {
      evenOddLen++;
      evenOddParity = (evenOddParity + 1) % 2;
    }
  }
  return Math.max(oddLen, evenLen, oddEvenLen, evenOddLen);
};

var nums = [1, 2, 3, 4];
var expected = 4;
var result = maximumLength(nums);
console.log(result, result === expected);

var nums = [1, 2, 1, 1, 2, 1, 2];
var expected = 6;
var result = maximumLength(nums);
console.log(result, result === expected);

var nums = [1, 3];
var expected = 2;
var result = maximumLength(nums);
console.log(result, result === expected);
