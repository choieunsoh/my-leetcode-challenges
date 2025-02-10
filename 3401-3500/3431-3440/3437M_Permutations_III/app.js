// 3437. Permutations III
// https://leetcode.com/problems/permutations-iii/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {number} n
 * @return {number[][]}
 */
var permute = function (n) {
  const result = [];
  const used = new Array(n + 1).fill(false);
  dfs([]);
  return result;

  function dfs(arr) {
    if (arr.length === n) {
      result.push([...arr]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (used[i]) continue;
      if (arr.length > 0 && (arr[arr.length - 1] & 1) === (i & 1)) continue;
      used[i] = true;
      arr.push(i);
      dfs(arr);
      arr.pop();
      used[i] = false;
    }
  }
};

var n = 4;
var expected = [
  [1, 2, 3, 4],
  [1, 4, 3, 2],
  [2, 1, 4, 3],
  [2, 3, 4, 1],
  [3, 2, 1, 4],
  [3, 4, 1, 2],
  [4, 1, 2, 3],
  [4, 3, 2, 1],
];
var result = permute(n);
console.log(result, result.join() === expected.join());

var n = 2;
var expected = [
  [1, 2],
  [2, 1],
];
var result = permute(n);
console.log(result, result.join() === expected.join());

var n = 3;
var expected = [
  [1, 2, 3],
  [3, 2, 1],
];
var result = permute(n);
console.log(result, result.join() === expected.join());
