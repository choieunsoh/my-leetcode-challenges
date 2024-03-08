// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)
var findCenter = function (edges: number[][]): number {
  const [[a, b], [u, v]] = edges;
  // [a, b]
  // [u, v]
  if (a === u || a === v) return a;
  if (b === u || b === v) return b;
  return 0;
};

var edges = [
  [1, 2],
  [2, 3],
  [4, 2],
];
var expected = 2;
var result = findCenter(edges);
console.log(result, result === expected);

var edges = [
  [1, 2],
  [5, 1],
  [1, 3],
  [1, 4],
];
var expected = 1;
var result = findCenter(edges);
console.log(result, result === expected);

var edges = [
  [1, 18],
  [18, 2],
  [3, 18],
  [18, 4],
  [18, 5],
  [6, 18],
  [18, 7],
  [18, 8],
  [18, 9],
  [18, 10],
  [18, 11],
  [12, 18],
  [18, 13],
  [18, 14],
  [15, 18],
  [16, 18],
  [17, 18],
];
var expected = 18;
var result = findCenter(edges);
console.log(result, result === expected);
