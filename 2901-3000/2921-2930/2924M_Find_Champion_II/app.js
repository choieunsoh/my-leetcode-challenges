// 2924. Find Champion II
// https://leetcode.com/problems/find-champion-ii/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  const indegree = new Array(n).fill(0);
  for (const [, v] of edges) {
    indegree[v]++;
  }

  let champion = -1;
  for (let i = 0; i < n; i++) {
    if (indegree[i] !== 0) continue;
    if (champion !== -1) return -1;
    champion = i;
  }
  return champion;
};

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
  ];
var expected = 0;
var result = findChampion(n, edges);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 2],
    [1, 3],
    [1, 2],
  ];
var expected = -1;
var result = findChampion(n, edges);
console.log(result, result === expected);
