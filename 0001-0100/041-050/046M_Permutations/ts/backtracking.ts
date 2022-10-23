// https://leetcode.com/problems/permutations/
// 46. Permutations
var permute = function (nums: number[]): number[][] {
  const result: number[][] = [];
  backtracking();
  return result;

  function backtracking(start = 0): void {
    if (start === nums.length - 1) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (i !== start) [nums[start], nums[i]] = [nums[i], nums[start]];
      backtracking(start + 1);
      if (i !== start) [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
};

var nums = [1, 2, 3];
var expected = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
var result = permute(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [0, 1];
var expected = [
  [0, 1],
  [1, 0],
];
var result = permute(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [1];
var expected = [[1]];
var result = permute(nums);
console.log(result, result.sort().join() === expected.sort().join());
