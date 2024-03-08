// 1791. Find Center of Star Graph
// https://leetcode.com/problems/find-center-of-star-graph/description/
// T.C: O(1)
// S.C: O(1)
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  const [[u0, v0], [u1, v1]] = edges;
  if (u0 === u1 || u0 === v1) return u0;
  if (v0 === u1 || v0 === v1) return v0;
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
