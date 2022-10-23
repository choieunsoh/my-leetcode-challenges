// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
var combinationSum = function (
  candidates: number[],
  target: number
): number[][] {
  const result: number[][] = [];
  combination();
  return result;

  function combination(start = 0, sum = 0, nums: number[] = []): void {
    if (sum > target) return;
    if (sum === target) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      nums.push(candidates[i]);
      combination(i, sum + candidates[i], nums);
      nums.pop();
    }
  }
};

var candidates = [2, 3, 6, 7],
  target = 7;
var expected = [[2, 2, 3], [7]];
var result = combinationSum(candidates, target);
console.log(result, result.sort().join() === expected.sort().join());

var candidates = [2, 3, 5],
  target = 8;
var expected = [
  [2, 2, 2, 2],
  [2, 3, 3],
  [3, 5],
];
var result = combinationSum(candidates, target);
console.log(result, result.sort().join() === expected.sort().join());

var candidates = [2],
  target = 1;
var expected: number[][] = [];
var result = combinationSum(candidates, target);
console.log(result, result.sort().join() === expected.sort().join());
