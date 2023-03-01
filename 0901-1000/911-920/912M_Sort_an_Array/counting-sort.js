// 912. Sort an Array
// https://leetcode.com/problems/sort-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const counts = Array(max - min + 1).fill(0);

  for (const num of nums) {
    counts[num - min]++;
  }

  let i = 0;
  for (let j = 0; j < counts.length; j++) {
    while (counts[j]--) {
      nums[i++] = min + j;
    }
  }

  return nums;
};

var nums = [5, 2, 3, 1];
var expected = [1, 2, 3, 5];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 1, 1, 2, 0, 0];
var expected = [0, 0, 1, 1, 2, 5];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());

var nums = [25, 12, 13, 1];
var expected = [1, 12, 13, 25];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());
