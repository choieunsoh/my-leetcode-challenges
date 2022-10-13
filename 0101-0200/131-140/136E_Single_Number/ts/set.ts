// 136. Single Number
// https://leetcode.com/problems/single-number/

function singleNumber_Set(nums: number[]): number {
  const seen = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      seen.delete(nums[i]);
    } else {
      seen.add(nums[i]);
    }
  }
  const [single] = [...seen];
  return single;
}

var nums = [2, 2, 1];
var expected = 1;
var result = singleNumber_Set(nums);
console.log(result, expected, result === expected);

var nums = [4, 1, 2, 1, 2];
var expected = 4;
var result = singleNumber_Set(nums);
console.log(result, expected, result === expected);

var nums = [1];
var expected = 1;
var result = singleNumber_Set(nums);
console.log(result, expected, result === expected);
