// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/
// T.C.: O(n)
// S.C.: O(n)
var findMaxLength = function (nums: number[]): number {
  const map = new Map<number, number>();
  let result = 0;
  let count = 0;
  map.set(count, -1);
  for (let index = 0; index < nums.length; index++) {
    count += nums[index] === 1 ? 1 : -1;
    if (!map.has(count)) {
      map.set(count, index);
    } else {
      result = Math.max(result, index - map.get(count)!);
    }
  }
  return result;
};

var nums = [0, 1];
var expected = 2;
var result = findMaxLength(nums);
console.log(result, result === expected);

var nums = [0, 1, 0];
var expected = 2;
var result = findMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 1, 0, 0, 1, 1, 0, 1, 1];
var expected = 6;
var result = findMaxLength(nums);
console.log(result, result === expected);
