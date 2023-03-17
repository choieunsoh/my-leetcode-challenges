// 297. Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
const { TreeNode, createTree, printTree } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root) {
  if (!root) return '';
  const result = [];
  dfs(root);
  return result.join(',');

  function dfs(node) {
    if (!node) {
      result.push('null');
      return;
    }

    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data) {
  if (!data) return null;
  const nodes = data.split(',');
  let index = 0;
  return dfs();

  function dfs() {
    if (nodes[index] === 'null') {
      index++;
      return null;
    }

    const node = new TreeNode(Number(nodes[index++]));
    node.left = dfs();
    node.right = dfs();
    return node;
  }
}

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
