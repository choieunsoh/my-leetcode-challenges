// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// 448. Find All Numbers Disappeared in an Array

function findDisappearedNumbers_Set(nums: number[]): number[] {
  const unseen: number[] = [];
  const seen = new Set<number>(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) {
      unseen.push(i);
    }
  }
  return unseen;
}

var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var expected = [5, 6];
var result = findDisappearedNumbers_Set(nums);
console.log(result.join(), result.join() === expected.join());

var nums = [1, 1];
var expected = [2];
var result = findDisappearedNumbers_Set(nums);
console.log(result.join(), result.join() === expected.join());
