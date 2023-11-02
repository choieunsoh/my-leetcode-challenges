// 2265. Count Nodes Equal to Average of Subtree
// https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/
// T.C.: O(n)
// S.C.: O(n)
const { TreeNode, createTree } = require('../../../_utils/tree');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
  let count = 0;
  postOrder(root);
  return count;

  function postOrder(root) {
    if (!root) return [0, 0];

    const [leftValue, leftCount] = postOrder(root.left);
    const [rightValue, rightCount] = postOrder(root.right);
    const [nodeValue, nodeCount] = [root.val + leftValue + rightValue, 1 + leftCount + rightCount];
    const average = (nodeValue / nodeCount) | 0;
    if (average === root.val) {
      count++;
    }
    return [nodeValue, nodeCount];
  }
};

var root = [4, 8, 5, 0, 1, null, 6];
var expected = 5;
var result = averageOfSubtree(createTree(root));
console.log(result, result === expected);

var root = [1];
var expected = 1;
var result = averageOfSubtree(createTree(root));
console.log(result, result === expected);
