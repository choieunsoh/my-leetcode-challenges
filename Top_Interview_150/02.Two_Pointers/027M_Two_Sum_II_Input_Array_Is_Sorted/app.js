// 167. Two Sum II - Input array is sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    else right--;
  }
  return [];
};

var numbers = [2, 7, 11, 15],
  target = 9;
var expected = [1, 2];
var result = twoSum(numbers, target);
console.log(result, result.join() === expected.join());

var numbers = [2, 3, 4],
  target = 6;
var expected = [1, 3];
var result = twoSum(numbers, target);
console.log(result, result.join() === expected.join());

var numbers = [-1, 0],
  target = -1;
var expected = [1, 2];
var result = twoSum(numbers, target);
console.log(result, result.join() === expected.join());
