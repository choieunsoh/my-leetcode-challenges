// 427. Construct Quad Tree
// https://leetcode.com/problems/construct-quad-tree/
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  function sameValue(x1, y1, length) {
    for (let i = x1; i < x1 + length; i++) {
      for (let j = y1; j < y1 + length; j++) {
        if (grid[i][j] !== grid[x1][y1]) return false;
      }
    }
    return true;
  }

  function dfs(x1, y1, length) {
    if (sameValue(x1, y1, length)) {
      return new Node(grid[x1][y1] === 1, true);
    }

    length >>= 1;
    const node = new Node(false, false);
    node.topLeft = dfs(x1, y1, length);
    node.topRight = dfs(x1, y1 + length, length);
    node.bottomLeft = dfs(x1 + length, y1, length);
    node.bottomRight = dfs(x1 + length, y1 + length, length);
    return node;
  }

  return dfs(0, 0, grid.length);
};

function toArray(root) {
  if (!root) return [];

  const result = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    const leaf = node.isLeaf ? 1 : 0;
    const val = node.val ? 1 : 0;
    result.push([leaf, val]);
    if (node.topLeft) q.push(node.topLeft);
    if (node.topRight) q.push(node.topRight);
    if (node.bottomLeft) q.push(node.bottomLeft);
    if (node.bottomRight) q.push(node.bottomRight);
  }

  return result;
}

var grid = [
  [0, 1],
  [1, 0],
];
var expected = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, 1],
  [1, 0],
];
var result = toArray(construct(grid));
console.log(result, result.join() === expected.join());

var grid = [
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
];
var expected = [[0, 1], [1, 1], [0, 1], [1, 1], [1, 0], null, null, null, null, [1, 0], [1, 0], [1, 1], [1, 1]];
var result = toArray(construct(grid));
console.log(result, result.join() === expected.join());
