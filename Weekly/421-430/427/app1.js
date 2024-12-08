/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(0);
  let index = 0;
  for (let i = 0; i < n; i++) {
    const num = nums[i] % n;
    index = (i + num + n) % n;

    result[i] = nums[index];
  }
  return result;
};

var nums = [3, -2, 1, 1];
var expected = [1, 1, 1, 3];
var result = constructTransformedArray(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 4, -1];
var expected = [-1, -1, 4];
var result = constructTransformedArray(nums);
console.log(result, result.join() === expected.join());

var nums = [-10, -10];
var expected = [-10, -10];
var result = constructTransformedArray(nums);
console.log(result, result.join() === expected.join());
