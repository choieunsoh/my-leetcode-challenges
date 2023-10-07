// 611. Valid Triangle Number
// https://leetcode.com/problems/valid-triangle-number/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let result = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 0) continue;
    let k = i + 2;
    for (let j = i + 1; j < nums.length - 1; j++) {
      while (k < nums.length && nums[i] + nums[j] > nums[k]) {
        k++;
      }
      result += k - j - 1;
    }
  }
  return result;
};

var nums = [2, 2, 3, 4];
var expected = 3;
var result = triangleNumber(nums);
console.log(result, result === expected);

var nums = [4, 2, 3, 4];
var expected = 4;
var result = triangleNumber(nums);
console.log(result, result === expected);

var nums = [7, 0, 0, 0];
var expected = 0;
var result = triangleNumber(nums);
console.log(result, result === expected);
