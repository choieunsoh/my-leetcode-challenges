// combinationSum
// LC-39. Combination Sum
// https://leetcode.com/problems/combination-sum/
function solution(a, target) {
  a.sort((a, b) => a - b);
  const result = new Set();
  dfs(0, 0, []);
  return result.size === 0 ? 'Empty' : [...result].join('');

  function dfs(start, sum, part) {
    if (sum > target) return;
    if (sum === target) {
      const values = part.sort((a, b) => a - b).join(' ');
      result.add(`(${values})`);
      return;
    }

    for (let i = start; i < a.length; i++) {
      const num = a[i];
      dfs(i, sum + num, [...part, num]);
    }
  }
}

var a = [6, 5, 6, 3, 3, 4, 3, 2, 2, 9, 9],
  sum = 24;
var expected =
  '(2 2 2 2 2 2 2 2 2 2 2 2)(2 2 2 2 2 2 2 2 2 2 4)(2 2 2 2 2 2 2 2 2 3 3)(2 2 2 2 2 2 2 2 2 6)(2 2 2 2 2 2 2 2 3 5)(2 2 2 2 2 2 2 2 4 4)(2 2 2 2 2 2 2 3 3 4)(2 2 2 2 2 2 2 4 6)(2 2 2 2 2 2 2 5 5)(2 2 2 2 2 2 3 3 3 3)(2 2 2 2 2 2 3 3 6)(2 2 2 2 2 2 3 4 5)(2 2 2 2 2 2 3 9)(2 2 2 2 2 2 4 4 4)(2 2 2 2 2 2 6 6)(2 2 2 2 2 3 3 3 5)(2 2 2 2 2 3 3 4 4)(2 2 2 2 2 3 5 6)(2 2 2 2 2 4 4 6)(2 2 2 2 2 4 5 5)(2 2 2 2 2 5 9)(2 2 2 2 3 3 3 3 4)(2 2 2 2 3 3 4 6)(2 2 2 2 3 3 5 5)(2 2 2 2 3 4 4 5)(2 2 2 2 3 4 9)(2 2 2 2 4 4 4 4)(2 2 2 2 4 6 6)(2 2 2 2 5 5 6)(2 2 2 3 3 3 3 3 3)(2 2 2 3 3 3 3 6)(2 2 2 3 3 3 4 5)(2 2 2 3 3 3 9)(2 2 2 3 3 4 4 4)(2 2 2 3 3 6 6)(2 2 2 3 4 5 6)(2 2 2 3 5 5 5)(2 2 2 3 6 9)(2 2 2 4 4 4 6)(2 2 2 4 4 5 5)(2 2 2 4 5 9)(2 2 2 6 6 6)(2 2 2 9 9)(2 2 3 3 3 3 3 5)(2 2 3 3 3 3 4 4)(2 2 3 3 3 5 6)(2 2 3 3 4 4 6)(2 2 3 3 4 5 5)(2 2 3 3 5 9)(2 2 3 4 4 4 5)(2 2 3 4 4 9)(2 2 3 5 6 6)(2 2 4 4 4 4 4)(2 2 4 4 6 6)(2 2 4 5 5 6)(2 2 5 5 5 5)(2 2 5 6 9)(2 3 3 3 3 3 3 4)(2 3 3 3 3 4 6)(2 3 3 3 3 5 5)(2 3 3 3 4 4 5)(2 3 3 3 4 9)(2 3 3 4 4 4 4)(2 3 3 4 6 6)(2 3 3 5 5 6)(2 3 4 4 5 6)(2 3 4 5 5 5)(2 3 4 6 9)(2 3 5 5 9)(2 4 4 4 4 6)(2 4 4 4 5 5)(2 4 4 5 9)(2 4 6 6 6)(2 4 9 9)(2 5 5 6 6)(3 3 3 3 3 3 3 3)(3 3 3 3 3 3 6)(3 3 3 3 3 4 5)(3 3 3 3 3 9)(3 3 3 3 4 4 4)(3 3 3 3 6 6)(3 3 3 4 5 6)(3 3 3 5 5 5)(3 3 3 6 9)(3 3 4 4 4 6)(3 3 4 4 5 5)(3 3 4 5 9)(3 3 6 6 6)(3 3 9 9)(3 4 4 4 4 5)(3 4 4 4 9)(3 4 5 6 6)(3 5 5 5 6)(3 6 6 9)(4 4 4 4 4 4)(4 4 4 6 6)(4 4 5 5 6)(4 5 5 5 5)(4 5 6 9)(5 5 5 9)(6 6 6 6)(6 9 9)';
var result = solution(a, sum);
console.log(result, result === expected);

var a = [8, 1, 8, 6, 8],
  sum = 12;
var expected = '(1 1 1 1 1 1 1 1 1 1 1 1)(1 1 1 1 1 1 6)(1 1 1 1 8)(6 6)';
var result = solution(a, sum);
console.log(result, result === expected);

var a = [2, 3, 5, 9],
  sum = 9;
var expected = '(2 2 2 3)(2 2 5)(3 3 3)(9)';
var result = solution(a, sum);
console.log(result, result === expected);
