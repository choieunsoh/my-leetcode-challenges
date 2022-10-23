// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  backtracking(0, target, []);
  return result;

  function backtracking(start, remain, nums) {
    if (remain < 0) return;
    if (remain === 0) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      nums.push(candidates[i]);
      backtracking(i, remain - candidates[i], nums);
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
var expected = [];
var result = combinationSum(candidates, target);
console.log(result, result.sort().join() === expected.sort().join());
