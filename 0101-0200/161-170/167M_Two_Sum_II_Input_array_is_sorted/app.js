// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 167. Two Sum II - Input array is sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (numbers, target) => {
  const nums = {};
  for (let i = 0; i < numbers.length; i++) {
    const remain = target - numbers[i];
    if (nums[remain] !== undefined) {
      return [nums[remain], i + 1];
    } else {
      nums[numbers[i]] = i + 1;
    }
  }
  return [];
};

var numbers = [2, 7, 11, 15],
  target = 9;
var expected = [1, 2];
var result = twoSum(numbers, target);
console.log(result, result.join('') === expected.join('') ? 'Pass' : 'Fail');

var numbers = [2, 3, 4],
  target = 6;
var expected = [1, 3];
var result = twoSum(numbers, target);
console.log(result, result.join('') === expected.join('') ? 'Pass' : 'Fail');

var numbers = [-1, 0],
  target = -1;
var expected = [1, 2];
var result = twoSum(numbers, target);
console.log(result, result.join('') === expected.join('') ? 'Pass' : 'Fail');
