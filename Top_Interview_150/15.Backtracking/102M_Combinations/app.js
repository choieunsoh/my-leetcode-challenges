// 77. Combinations
// https://leetcode.com/problems/combinations/
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  combination(1, []);
  return result;

  function combination(start, numbers) {
    if (k === numbers.length) {
      result.push([...numbers]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination(i + 1, [...numbers, i]);
    }
  }
};

var n = 4,
  k = 2,
  expected = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ];
var result = combine(n, k);
console.log(result, result.join() === expected.join());

var n = 1,
  k = 1,
  expected = [[1]];
var result = combine(n, k);
console.log(result, result.join() === expected.join());

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
console.log(result, result.join() === expected.join());
