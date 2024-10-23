// 2641. Cousins in Binary Tree II
// https://leetcode.com/problems/cousins-in-binary-tree-ii/description/
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
var replaceValueInTree = function (root) {
  if (!root) return root;

  let queue = [root];
  const levelSums = [];
  while (queue.length) {
    const nextQueue = [];
    let levelSum = 0;
    for (const node of queue) {
      levelSum += node.val;
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    levelSums.push(levelSum);
    queue = nextQueue;
  }

  queue = [root];
  root.val = 0;
  let levelIndex = 1;
  while (queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      const siblingSum = (node.left?.val ?? 0) + (node.right?.val ?? 0);
      if (node.left) {
        node.left.val = levelSums[levelIndex] - siblingSum;
        nextQueue.push(node.left);
      }
      if (node.right) {
        node.right.val = levelSums[levelIndex] - siblingSum;
        nextQueue.push(node.right);
      }
    }
    queue = nextQueue;
    levelIndex++;
  }
  return root;
};

// [5,4,9,1,10,null,7]
var root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 10,
      left: null,
      right: null,
    },
  },
  right: {
    val: 9,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
// [0,0,0,7,7,null,11]
var expected = {
  val: 0,
  left: {
    val: 0,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 0,
    left: null,
    right: {
      val: 11,
      left: null,
      right: null,
    },
  },
};
var result = replaceValueInTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3,1,2]
var root = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};
// [0,0,0]
var expected = {
  val: 0,
  left: {
    val: 0,
    left: null,
    right: null,
  },
  right: {
    val: 0,
    left: null,
    right: null,
  },
};
var result = replaceValueInTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
