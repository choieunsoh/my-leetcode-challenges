// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// 297. Serialize and Deserialize Binary Tree
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
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
  if (!root) return root;
  const result = [];

  function traverse(node) {
    if (!node) {
      result.push('N');
      return;
    }

    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return data;
  const tree = data.split(',');
  let index = 0;

  function traverseAndReplace() {
    if (tree[index] === 'N' || tree[index] === '' || tree[index] === 'null') {
      index++;
      return null;
    }
    const node = new TreeNode(Number(tree[index++]));
    node.left = traverseAndReplace();
    node.right = traverseAndReplace();
    return node;
  }

  return traverseAndReplace();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

var root = createTree([1, 2, 3, null, null, 4, 5]);
var expected = createTree([1, 2, 3, null, null, 4, 5]);
var data = serialize(root);
var result = deserialize(data);
console.log(data);
printTree(result);
printTree(expected);

var root = createTree([1, 2, 3, null, null, 4, 5, 6, 7]);
var expected = createTree([1, 2, 3, null, null, 4, 5, 6, 7]);
var data = serialize(root);
var result = deserialize(data);
console.log(data);
printTree(result);
printTree(expected);
