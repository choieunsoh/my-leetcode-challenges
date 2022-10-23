// 77. Combinations
// https://leetcode.com/problems/combinations/
var combine = function (n: number, k: number): number[][] {
  const result: number[][] = [];
  const nums: number[] = [];
  backtracking(1);
  return result;

  function backtracking(start: number): void {
    if (nums.length === k) {
      result.push([...nums]);
      return;
    }

    for (let i = start; i <= n; i++) {
      nums.push(i);
      backtracking(i + 1);
      nums.pop();
    }
  }
};

var n = 4,
  k = 2,
  expected = [
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
  ];
var result = combine(n, k);
console.log(result, result.sort().join() === expected.sort().join());

var n = 1,
  k = 1,
  expected = [[1]];
var result = combine(n, k);
console.log(result, result.sort().join() === expected.sort().join());

var n = 5,
  k = 3,
  expected = [
    [1, 2, 3],
    [1, 2, 4],
    [1, 2, 5],
    [1, 3, 4],
    [1, 3, 5],
    [1, 4, 5],
    [2, 3, 4],
    [2, 3, 5],
    [2, 4, 5],
    [3, 4, 5],
  ];
var result = combine(n, k);
console.log(result, result.sort().join() === expected.sort().join());
