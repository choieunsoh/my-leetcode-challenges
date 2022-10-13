// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// 448. Find All Numbers Disappeared in an Array

function findDisappearedNumbers_Negative(nums: number[]): number[] {
  const unseen: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -1 * nums[index];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      unseen.push(i + 1);
    }
  }
  return unseen;
}

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var expected = [5, 6];
var result = findDisappearedNumbers_Negative(nums);
console.log(result.join(), result.join() === expected.join());

var nums = [1, 1];
var expected = [2];
var result = findDisappearedNumbers_Negative(nums);
console.log(result.join(), result.join() === expected.join());
