// 449. Serialize and Deserialize BST
// https://leetcode.com/problems/serialize-and-deserialize-bst/
const { TreeNode, createTree, levelOrder } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const tree = [];
  _serialize(root);
  return tree.join(',');

  function _serialize(root) {
    if (!root) return;

    tree.push(root.val);
    _serialize(root.left);
    _serialize(root.right);
  }
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === '') return null;
  const nodes = data.split(',');
  return _deserialize(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  function _deserialize(lower, upper) {
    if (nodes.length === 0) return null;
    const value = +nodes[0];
    if (value < lower || value > upper) return null;

    nodes.shift();
    const root = new TreeNode(value);
    root.left = _deserialize(lower, value);
    root.right = _deserialize(value, upper);
    return root;
  }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
var root = createTree([2, 1, 3]);
var expected = [2, 1, 3];
var result = serialize(root);
console.log('serialize', result);
var result = levelOrder(deserialize(result));
console.log(result, result.join() === expected.join());

var root = createTree([]);
var expected = [];
var result = serialize(root);
console.log('serialize', result);
var result = levelOrder(deserialize(result));
console.log(result, result.join() === expected.join());

var root = createTree([0]);
var expected = [0];
var result = serialize(root);
console.log('serialize', result);
var result = levelOrder(deserialize(result));
console.log(result, result.join() === expected.join());
