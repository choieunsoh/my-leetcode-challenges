// https://leetcode.com/problems/sort-an-array/
// 912. Sort an Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length < 2) return nums;

  function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }

  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push([nums[i]]);
  }

  while (result.length > 1) {
    const temp = [];
    for (let i = 0; i < result.length - 1; i += 2) {
      temp.push(merge(result[i], result[i + 1]));
    }
    if (result.length % 2) {
      temp.push(result[result.length - 1]);
    }
    result = temp;
  }
  return result[0];
};

var nums = [5, 2, 3, 1];
var expected = [1, 2, 3, 5];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());

var nums = [5, 1, 1, 2, 0, 0];
var expected = [0, 0, 1, 1, 2, 5];
var result = sortArray(nums);
console.log(result, result.join() === expected.join());
