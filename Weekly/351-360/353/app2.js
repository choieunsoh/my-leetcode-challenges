/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  let result = 0;
  return result;
};

var nums = [1, 3, 6, 4, 1, 2],
  target = 2;
var expected = 3;
var result = maximumJumps(nums, target);
console.log(result, result === expected);

var nums = [1, 0, 2],
  target = 1;
var expected = 1;
var result = maximumJumps(nums, target);
console.log(result, result === expected);
