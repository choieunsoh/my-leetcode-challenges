// 90. Subsets II
// https://leetcode.com/problems/subsets-ii/
var subsetsWithDup = function (nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  backtracking();
  return result;

  function backtracking(i = 0, subset: number[] = []): void {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtracking(i + 1, subset);

    subset.pop();
    while (i < nums.length && nums[i] === nums[i + 1]) i++;
    backtracking(i + 1, subset);
  }
};

var nums = [1, 2, 2];
var expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [0];
var expected = [[], [0]];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [4, 4, 4, 1, 4];
var expected = [
  [],
  [1],
  [1, 4],
  [1, 4, 4],
  [1, 4, 4, 4],
  [1, 4, 4, 4, 4],
  [4],
  [4, 4],
  [4, 4, 4],
  [4, 4, 4, 4],
];
var result = subsetsWithDup(nums);
console.log(result, result.sort().join() === expected.sort().join());
