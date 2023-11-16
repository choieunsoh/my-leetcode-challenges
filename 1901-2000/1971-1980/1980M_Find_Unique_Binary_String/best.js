// 1980. Find Unique Binary String
// https://leetcode.com/problems/find-unique-binary-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let result = '';
  for (let i = 0; i < nums.length; i++) {
    const char = nums[i].charAt(i);
    result += char === '0' ? '1' : '0';
  }
  return result;
};

var nums = ['01', '10'];
var expected = ['00', '11'];
var result = findDifferentBinaryString(nums);
console.log(result, expected.includes(result));

var nums = ['00', '01'];
var expected = ['10', '11'];
var result = findDifferentBinaryString(nums);
console.log(result, expected.includes(result));

var nums = ['111', '011', '001'];
var expected = ['000', '010', '100', '101', '110'];
var result = findDifferentBinaryString(nums);
console.log(result, expected.includes(result));
