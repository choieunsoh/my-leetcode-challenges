// https://leetcode.com/problems/find-the-duplicate-number/
// 287. Find the Duplicate Number
function findDuplicate_Negative(nums: number[]): number {
  let duplicate = -1;
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      return index + 1;
    }
    nums[index] *= -1;
  }
  return -1;
}

var nums = [1, 3, 4, 2, 2];
var expected = 2;
var result = findDuplicate_Negative(nums);
console.log(result, expected, result === expected);

var nums = [3, 1, 3, 4, 2];
var expected = 3;
var result = findDuplicate_Negative(nums);
console.log(result, expected, result === expected);

var nums = [3, 1, 5, 4, 2];
var expected = -1;
var result = findDuplicate_Negative(nums);
console.log(result, expected, result === expected);
