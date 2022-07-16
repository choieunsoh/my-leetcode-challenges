// https://leetcode.com/problems/combinations/
// 77. Combinations
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  let numbers = [];

  function combination(n, k, start = 1) {
    if (k === 0) {
      result.push([...numbers]);
    } else {
      for (let i = start; i <= n; i++) {
        numbers.push(i);
        combination(n, k - 1, i + 1);
        numbers.pop();
      }
    }
  }

  combination(n, k);
  return result;
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
console.log(result.join(', '), result.join() === expected.join());

var n = 1,
  k = 1,
  expected = [[1]];
var result = combine(n, k);
console.log(result.join(', '), result.join() === expected.join());

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
console.log(result.join(', '), result.join() === expected.join());
