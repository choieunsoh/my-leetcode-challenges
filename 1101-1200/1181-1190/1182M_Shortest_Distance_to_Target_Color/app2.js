// 1182. Shortest Distance to Target Color
// https://leetcode.com/problems/shortest-distance-to-target-color/description/
// T.C.: O(m + n)
// S.C.: O(n)
/**
 * @param {number[]} colors
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceColor = function (colors, queries) {
  const n = colors.length;
  const rightmost = [0, 0, 0];
  const leftmost = [n - 1, n - 1, n - 1];
  const distance = Array.from({ length: 3 }, () => new Array(n).fill(-1));

  for (let i = 0; i < n; i++) {
    const color = colors[i] - 1;
    for (let j = rightmost[color]; j <= i; j++) {
      distance[color][j] = i - j;
    }
    rightmost[color] = i + 1;
  }

  for (let i = n - 1; i >= 0; i--) {
    const color = colors[i] - 1;
    for (let j = leftmost[color]; j >= i; j--) {
      if (distance[color][j] === -1 || distance[color][j] > j - i) {
        distance[color][j] = j - i;
      }
    }
    leftmost[color] = i - 1;
  }

  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const index = queries[i][0];
    const color = queries[i][1] - 1;
    result.push(distance[color][index]);
  }
  return result;
};

var colors = [1, 1, 2, 1, 3, 2, 2, 3, 3],
  queries = [
    [1, 3],
    [2, 2],
    [6, 1],
  ];
var expected = [3, 0, 3];
var result = shortestDistanceColor(colors, queries);
console.log(result, result.join() === expected.join());

var colors = [1, 2],
  queries = [[0, 3]];
var expected = [-1];
var result = shortestDistanceColor(colors, queries);
console.log(result, result.join() === expected.join());
