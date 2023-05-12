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
  return dfs(0, 0, grid.length);

  function dfs(x, y, len) {
    if (len === 1) {
      return new Node(grid[x][y], true, null, null, null, null);
    }

    const nextLen = len >> 1;
    const node = new Node();
    const topLeft = dfs(x, y, nextLen);
    const topRight = dfs(x, y + nextLen, nextLen);
    const bottomLeft = dfs(x + nextLen, y, nextLen);
    const bottomRight = dfs(x + nextLen, y + nextLen, nextLen);
    if (
      topLeft.isLeaf &&
      topRight.isLeaf &&
      bottomLeft.isLeaf &&
      bottomRight.isLeaf &&
      topLeft.val === topRight.val &&
      topRight.val === bottomLeft.val &&
      bottomLeft.val === bottomRight.val
    ) {
      node.val = topLeft.val;
      node.isLeaf = true;
    } else {
      node.topLeft = topLeft;
      node.topRight = topRight;
      node.bottomLeft = bottomLeft;
      node.bottomRight = bottomRight;
    }
    return node;
  }
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
