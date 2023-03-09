// 173. Binary Search Tree Iterator
// https://leetcode.com/problems/binary-search-tree-iterator/
const { createTree, TreeNode } = require('../../../_utils/tree');
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
 */
class BSTIterator {
  constructor(root) {
    this.nodes = [];
    this.index = 0;
    this.__inOrder(root);
  }

  __inOrder(root) {
    if (!root) return;
    if (root.left) this.__inOrder(root.left);
    this.nodes.push(root.val);
    if (root.right) this.__inOrder(root.right);
  }

  /**
   * @return {number}
   */
  next() {
    return this.nodes[this.index++];
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.index < this.nodes.length;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

var result = null;
var root = createTree([7, 3, 15, null, null, 9, 20]);
var bSTIterator = new BSTIterator(root);
result = bSTIterator.next(); // return 3
console.log(result, result === 3);
result = bSTIterator.next(); // return 7
console.log(result, result === 7);
result = bSTIterator.hasNext(); // return True
console.log(result, result === true);
result = bSTIterator.next(); // return 9
console.log(result, result === 9);
result = bSTIterator.hasNext(); // return True
console.log(result, result === true);
result = bSTIterator.next(); // return 15
console.log(result, result === 15);
result = bSTIterator.hasNext(); // return True
console.log(result, result === true);
result = bSTIterator.next(); // return 20
console.log(result, result === 20);
result = bSTIterator.hasNext(); // return False
console.log(result, result === false);
