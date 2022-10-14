// https://leetcode.com/problems/find-the-duplicate-number/
// 287. Find the Duplicate Number
function findDuplicate_Set(nums: number[]): number {
  const seen = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return -1;
}

var nums = [1, 3, 4, 2, 2];
var expected = 2;
var result = findDuplicate_Set(nums);
console.log(result, expected, result === expected);

var nums = [3, 1, 3, 4, 2];
var expected = 3;
var result = findDuplicate_Set(nums);
console.log(result, expected, result === expected);

var nums = [3, 1, 5, 4, 2];
var expected = -1;
var result = findDuplicate_Set(nums);
console.log(result, expected, result === expected);
