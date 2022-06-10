// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 167. Two Sum II - Input array is sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left += 1;
    } else if (sum > target) {
      right -= 1;
    } else {
      return [left + 1, right + 1];
    }
  }
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
