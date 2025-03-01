/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  let evenCount = 0;
  for (const num of nums) {
    if (num % 2 === 0) {
      evenCount++;
    }
  }
  for (let i = 0; i < evenCount; i++) {
    nums[i] = 0;
  }
  for (let i = evenCount; i < nums.length; i++) {
    nums[i] = 1;
  }
  return nums;
};

var nums = [4, 3, 2, 1];
var expected = [0, 0, 1, 1];
var result = transformArray(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 5, 1, 4, 2];
var expected = [0, 0, 1, 1, 1];
var result = transformArray(nums);
console.log(result, result.join() === expected.join());
