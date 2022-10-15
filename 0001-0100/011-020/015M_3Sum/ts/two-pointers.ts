// https://leetcode.com/problems/3sum/
// 15. 3Sum
var threeSum = function (nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length - 2; index++) {
    if (index > 0 && nums[index] === nums[index - 1]) continue;

    let left = index + 1;
    let right = nums.length - 1;
    while (left < right) {
      const threeSum = nums[index] + nums[left] + nums[right];
      if (threeSum === 0) {
        result.push([nums[index], nums[left], nums[right]]);
        right = moveRight(left, right);
        left = moveLeft(left, right);
      } else if (threeSum > 0) {
        right = moveRight(left, right);
      } else {
        left = moveLeft(left, right);
      }
    }
  }
  return result;

  function moveLeft(left: number, right: number): number {
    left++;
    while (left < right && nums[left] === nums[left - 1]) left++;
    return left;
  }
  function moveRight(left: number, right: number): number {
    right--;
    while (left < right && nums[right] === nums[right + 1]) right--;
    return right;
  }
};

var nums = [-1, 0, 1, 2, -1, -4];
var expected = [
  [-1, -1, 2],
  [-1, 0, 1],
];
var result = threeSum(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 1, 1];
var expected: number[][] = [];
var result = threeSum(nums);
console.log(result, result.join() === expected.join());

var nums = [0, 0, 0];
var expected = [[0, 0, 0]];
var result = threeSum(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
var expected = [
  [-4, 0, 4],
  [-4, 1, 3],
  [-3, -1, 4],
  [-3, 0, 3],
  [-3, 1, 2],
  [-2, -1, 3],
  [-2, 0, 2],
  [-1, -1, 2],
  [-1, 0, 1],
];
var result = threeSum(nums);
console.log(result, result.join() === expected.join());
