// climbingStaircase
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function climbingStaircase(n, k) {
  const result = [];
  dfs(0, []);
  return result;

  function dfs(sum, path) {
    if (sum === n) {
      result.push([...path]);
      return;
    }

    for (let i = 1; i <= k; i++) {
      if (sum + i > n) break;
      dfs(sum + i, [...path, i]);
    }
  }
}

var n = 4,
  k = 2;
var expected = [
  [1, 1, 1, 1],
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1],
  [2, 2],
];
var result = climbingStaircase(n, k);
console.log(result, result.join() === expected.join());
