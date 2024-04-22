// 919. Complete Binary Tree Inserter
// https://leetcode.com/problems/complete-binary-tree-inserter/description/
// T.C.: O(n)
// S.C.: O(n)
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
var CBTInserter = function (root) {
  this.root = root;
  this.stack = [];

  let queue = [root];
  while (queue.length) {
    const newQueue = [];
    for (const node of queue) {
      if (!node.left || !node.right) {
        this.stack.push(node);
        continue;
      }
      newQueue.push(node.left, node.right);
    }
    queue = newQueue;
  }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  let [node] = this.stack;
  if (node.left) {
    node.right = new TreeNode(val);
    this.stack.shift();
    this.stack.push(node.left, node.right);
  } else {
    node.left = new TreeNode(val);
  }
  return node.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
