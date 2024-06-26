// 1382. Balance a Binary Search Tree
// https://leetcode.com/problems/balance-a-binary-search-tree/description/
// Day-Stout-Warren Algorithm
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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
  if (!root) return null;

  // Step 1: Create the backbone (vine)
  // Temporary dummy node
  const vineHead = new TreeNode(0);
  vineHead.right = root;
  let current = vineHead;
  while (current.right) {
    if (current.right.left) {
      rightRotate(current, current.right);
    } else {
      current = current.right;
    }
  }

  // Step 2: Count the nodes
  let nodeCount = 0;
  current = vineHead.right;
  while (current) {
    current = current.right;
    nodeCount++;
  }

  // Step 3: Create a balanced BST
  let m = 2 ** (Math.log2(nodeCount + 1) | 0) - 1;
  makeRotations(vineHead, nodeCount - m);
  while (m > 1) {
    m >>= 1;
    makeRotations(vineHead, m);
  }

  const balancedRoot = vineHead.right;
  return balancedRoot;

  // Function to perform a right rotation
  function rightRotate(parent, node) {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    parent.right = tmp;
  }

  // Function to perform a left rotation
  function leftRotate(parent, node) {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    parent.right = tmp;
  }

  // Function to perform a series of left rotations to balance the vine
  function makeRotations(vineHead, count) {
    let current = vineHead;
    for (let i = 0; i < count; ++i) {
      const tmp = current.right;
      leftRotate(current, tmp);
      current = current.right;
    }
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// [1, null, 2, null, 3, null, 4, null, null];
var root = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
};
// [3, 2, 4, 1];
var expected = {
  val: 3,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
};
var result = balanceBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [2, 1, 3];
var root = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
// [2, 1, 3];
var expected = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
var result = balanceBST(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
