// 216. Combination Sum III
// https://leetcode.com/problems/combination-sum-iii/
var combinationSum3 = function (k: number, n: number): number[][] {
  const result: number[][] = [];
  combine(1, 0, []);
  return result;

  function combine(start: number, sum: number, nums: number[]): void {
    if (sum > n) return;
    if (nums.length === k) {
      if (sum === n) result.push([...nums]);
      return;
    }

    for (let i = start; i <= 9; i++) {
      if (sum + i > n) break;

      nums.push(i);
      combine(i + 1, sum + i, nums);
      nums.pop();
    }
  }
};

var k = 3,
  n = 7;
var expected = [[1, 2, 4]];
var result = combinationSum3(k, n);
console.log(result, result.sort().join() === expected.sort().join());

var k = 3,
  n = 9;
var expected = [
  [1, 2, 6],
  [1, 3, 5],
  [2, 3, 4],
];
var result = combinationSum3(k, n);
console.log(result, result.sort().join() === expected.sort().join());

var k = 4,
  n = 1;
var expected: number[][] = [];
var result = combinationSum3(k, n);
console.log(result, result.sort().join() === expected.sort().join());
