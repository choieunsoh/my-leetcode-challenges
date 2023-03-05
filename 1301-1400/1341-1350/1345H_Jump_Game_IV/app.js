// 1345. Jump Game IV
// https://leetcode.com/problems/jump-game-iv/
/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function (arr) {
  const n = arr.length;
  const graph = new Map();
  for (let i = 0; i < n; i++) {
    const nodes = graph.get(arr[i]);
    if (nodes) {
      nodes.push(i);
    } else {
      graph.set(arr[i], [i]);
    }
  }

  const visited = new Set([0]);
  let q = [0];
  let result = 0;
  while (q.length) {
    const qq = [];
    for (const i of q) {
      if (i === n - 1) return result;
      if (i + 1 < n && !visited.has(i + 1)) {
        visited.add(i + 1);
        qq.push(i + 1);
      }
      if (i - 1 >= 0 && !visited.has(i - 1)) {
        visited.add(i - 1);
        qq.push(i - 1);
      }
      const indices = graph.get(arr[i]);
      if (!indices) continue;
      for (const j of indices) {
        if (!visited.has(j)) {
          visited.add(j);
          qq.push(j);
        }
      }
      graph.delete(arr[i]);
    }
    result++;
    q = qq;
  }

  return result;
};

var arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
var expected = 3;
var result = minJumps(arr);
console.log(result, result == expected);

var arr = [7];
var expected = 0;
var result = minJumps(arr);
console.log(result, result == expected);

var arr = [7, 6, 9, 6, 9, 6, 9, 7];
var expected = 1;
var result = minJumps(arr);
console.log(result, result == expected);
