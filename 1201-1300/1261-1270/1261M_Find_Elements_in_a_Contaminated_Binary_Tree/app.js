// 1261. Find Elements in a Contaminated Binary Tree
// https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/description/
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
var FindElements = function (root) {
  const nodes = new Set();
  dfs(root, 0);
  this.nodes = nodes;

  function dfs(node, val) {
    if (!node) return;

    nodes.add(val);
    dfs(node.left, val * 2 + 1);
    dfs(node.right, val * 2 + 2);
  }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.nodes.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const args = inputs[i];
    if (ops[i] === 'FindElements') {
      obj = new FindElements(...args);
    } else {
      const result = obj[ops[i]](...args) ?? null;
      const expected = outputs[i];
      console.log(i, ops[i], args, result, result === expected);
    }
  }
  console.log();
}

// [-1, null, -1]
var root = {
  val: -1,
  left: null,
  right: {
    val: -1,
    left: null,
    right: null,
  },
};
var ops = ['FindElements', 'find', 'find'],
  inputs = [[root], [1], [2]],
  outputs = [null, false, true];
run(ops, inputs, outputs);

// [-1, -1, -1, -1, -1]
var root = {
  val: -1,
  left: {
    val: -1,
    left: {
      val: -1,
      left: null,
      right: null,
    },
    right: {
      val: -1,
      left: null,
      right: null,
    },
  },
  right: {
    val: -1,
    left: null,
    right: null,
  },
};
var ops = ['FindElements', 'find', 'find', 'find'],
  inputs = [[root], [1], [3], [5]],
  outputs = [null, true, true, false];
run(ops, inputs, outputs);

// [-1, null, -1, -1, null, -1]
var root = {
  val: -1,
  left: null,
  right: {
    val: -1,
    left: {
      val: -1,
      left: {
        val: -1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: null,
  },
};
var ops = ['FindElements', 'find', 'find', 'find', 'find'],
  inputs = [[root], [2], [3], [4], [5]],
  outputs = [null, true, false, false, true];
run(ops, inputs, outputs);
