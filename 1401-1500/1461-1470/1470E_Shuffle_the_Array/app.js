// 1470. Shuffle the Array
// https://leetcode.com/problems/shuffle-the-array/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[i + n]);
  }
  return result;
};

var nums = [2, 5, 1, 3, 4, 7],
  n = 3;
var expected = [2, 3, 5, 4, 1, 7];
var result = shuffle(nums, n);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3, 4, 4, 3, 2, 1],
  n = 4;
var expected = [1, 4, 2, 3, 3, 2, 4, 1];
var result = shuffle(nums, n);
console.log(result, result.join() === expected.join());

var nums = [1, 1, 2, 2],
  n = 2;
var expected = [1, 2, 1, 2];
var result = shuffle(nums, n);
console.log(result, result.join() === expected.join());
