// 40. Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  combination();
  return result;

  function combination(start = 0, sum = 0, nums = []) {
    if (sum > target) return;
    if (sum === target) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      if (sum + candidates[i] > target) break;

      nums.push(candidates[i]);
      combination(i + 1, sum + candidates[i], nums);
      nums.pop();
    }
  }
};

var candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
var expected = [
  [1, 1, 6],
  [1, 2, 5],
  [1, 7],
  [2, 6],
];
var result = combinationSum2(candidates, target);
console.log(result, result.sort().join() === expected.sort().join());

var candidates = [2, 5, 2, 1, 2],
  target = 5;
var expected = [[1, 2, 2], [5]];
var result = combinationSum2(candidates, target);
console.log(result, result.sort().join() === expected.sort().join());
