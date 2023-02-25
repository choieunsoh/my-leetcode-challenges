// 179. Largest Number
// https://leetcode.com/problems/largest-number/
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let result = '';
  nums.sort(compare);
  if (nums[0] === 0) return '0';

  for (const num of nums) {
    result += num.toString();
  }
  return result;

  function compare(a, b) {
    const num1 = Number(`${a}${b}`);
    const num2 = Number(`${b}${a}`);
    return num2 - num1;
  }
};

var nums = [10, 2];
var expected = '210';
var result = largestNumber(nums);
console.log(result, result === expected);

var nums = [3, 30, 34, 5, 9];
var expected = '9534330';
var result = largestNumber(nums);
console.log(result, result === expected);

var nums = [3, 35, 34, 5, 9];
var expected = '9535343';
var result = largestNumber(nums);
console.log(result, result === expected);

var nums = [0, 0];
var expected = '0';
var result = largestNumber(nums);
console.log(result, result === expected);
