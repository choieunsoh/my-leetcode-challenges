// 47. Permutations II
// https://leetcode.com/problems/permutations-ii/
var permuteUnique = function (nums: number[]): number[][] {
  const result: number[][] = [];
  backtracking();
  return result;

  function backtracking(i = 0): void {
    if (i === nums.length - 1) {
      result.push([...nums]);
      return;
    }

    const seen = new Set<number>();
    for (let j = i; j < nums.length; j++) {
      if (seen.has(nums[j])) continue;

      seen.add(nums[j]);
      if (i !== j) [nums[i], nums[j]] = [nums[j], nums[i]];
      backtracking(i + 1);
      if (i !== j) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
};

var nums = [1, 1, 2];
var expected = [
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
];
var result = permuteUnique(nums);
console.log(result, result.sort().join() === expected.sort().join());

var nums = [1, 2, 3];
var expected = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];
var result = permuteUnique(nums);
console.log(result, result.sort().join() === expected.sort().join());
