// 1485. Clone Binary Tree With Random Pointer
// https://leetcode.com/problems/clone-binary-tree-with-random-pointer/description/
// T.C.: O()
// S.C.: O()
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */
function _Node(val, left, right, random) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.random = random === undefined ? null : random;
}
function NodeCopy(val, left, right, random) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.random = random === undefined ? null : random;
}

/**
 * @param {_Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function (root) {
  if (!root) return null;

  const m = new Map();
  return clone(root);

  function clone(node) {
    if (!node) return null;
    if (m.has(node)) return m.get(node);

    const newNode = new NodeCopy(node.val);
    m.set(node, newNode);
    newNode.left = clone(node.left);
    newNode.right = clone(node.right);
    newNode.random = clone(node.random);
    return newNode;
  }
};

var root = [[1, null], null, [4, 3], [7, 0]];
var expected = [[1, null], null, [4, 3], [7, 0]];
var result = copyRandomBinaryTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = [[1, 4], null, [1, 0], null, [1, 5], [1, 5]];
var expected = [[1, 4], null, [1, 0], null, [1, 5], [1, 5]];
var result = copyRandomBinaryTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var root = [
  [1, 6],
  [2, 5],
  [3, 4],
  [4, 3],
  [5, 2],
  [6, 1],
  [7, 0],
];
var expected = [
  [1, 6],
  [2, 5],
  [3, 4],
  [4, 3],
  [5, 2],
  [6, 1],
  [7, 0],
];
var result = copyRandomBinaryTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
