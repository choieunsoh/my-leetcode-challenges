// 2191. Sort the Jumbled Numbers
// https://leetcode.com/problems/sort-the-jumbled-numbers/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
  const mappedNums = nums.map((num) => [num, mappedValue(num)]);
  mappedNums.sort((a, b) => a[1] - b[1]);
  return mappedNums.map((num) => num[0]);

  function mappedValue(num) {
    if (num < 10) return mapping[num];
    let value = 0;
    let base = 1;
    while (num) {
      value += base * mapping[num % 10];
      num = Math.floor(num / 10);
      base *= 10;
    }
    return value;
  }
};

var mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6],
  nums = [991, 338, 38];
var expected = [338, 38, 991];
var result = sortJumbled(mapping, nums);
console.log(result, result.join() === expected.join());

var mapping = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  nums = [789, 456, 123];
var expected = [123, 456, 789];
var result = sortJumbled(mapping, nums);
console.log(result, result.join() === expected.join());

var mapping = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var expected = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var result = sortJumbled(mapping, nums);
console.log(result, result.join() === expected.join());
