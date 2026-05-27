// 1340. Jump Game V
// https://leetcode.com/problems/jump-game-v/description/
// T.C.: O(N * D)
// S.C.: O(N)
/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function (arr, d) {
  const n = arr.length;
  const f = new Array(n).fill(-1);

  for (let i = 0; i < n; ++i) {
    dfs(i);
  }

  return Math.max(...f);

  function dfs(id) {
    if (f[id] !== -1) {
      return;
    }
    f[id] = 1;
    for (let i = id - 1; i >= 0 && id - i <= d && arr[id] > arr[i]; --i) {
      dfs(i);
      f[id] = Math.max(f[id], f[i] + 1);
    }
    for (let i = id + 1; i < n && i - id <= d && arr[id] > arr[i]; ++i) {
      dfs(i);
      f[id] = Math.max(f[id], f[i] + 1);
    }
  }
};

var arr = [6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12],
  d = 2;
var expected = 4;
var result = maxJumps(arr, d);
console.log(result, result === expected);

var arr = [3, 3, 3, 3, 3],
  d = 3;
var expected = 1;
var result = maxJumps(arr, d);
console.log(result, result === expected);

var arr = [7, 6, 5, 4, 3, 2, 1],
  d = 1;
var expected = 7;
var result = maxJumps(arr, d);
console.log(result, result === expected);
