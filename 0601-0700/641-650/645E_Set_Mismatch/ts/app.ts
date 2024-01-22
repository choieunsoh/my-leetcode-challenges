// 645. Set Mismatch
// https://leetcode.com/problems/set-mismatch/
// T.C.: O(n)
// S.C.: O(n)
var findErrorNums = function (nums: number[]): number[] {
  const result = [0, 0];
  const n = nums.length;
  const count = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (count[num] === 1) {
      result[0] = num;
    } else {
      count[num] = 1;
    }
  }
  for (let i = 1; i <= n; i++) {
    if (count[i] === 0) {
      result[1] = i;
      break;
    }
  }
  return result;
};

var nums = [1, 2, 2, 4];
var expected = [2, 3];
var result = findErrorNums(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 1];
var expected = [1, 2];
var result = findErrorNums(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 2];
var expected = [2, 1];
var result = findErrorNums(nums);
console.log(result, result.join() === expected.join());
