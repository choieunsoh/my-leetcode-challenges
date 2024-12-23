// 2471. Minimum Number of Operations to Sort a Binary Tree by Level
// https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/description/
// T.C.: O(n log n)
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
 * @return {number}
 */
var minimumOperations = function (root) {
  let count = 0;
  let queue = [root];
  while (queue.length) {
    const nextQueue = [];
    const nodes = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      nodes.push(node.val);

      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }

    count += getMinSwaps(nodes);
    queue = nextQueue;
  }
  return count;

  function getMinSwaps(nodes) {
    let count = 0;
    const sortedNodes = [...nodes].sort((a, b) => a - b);
    const posMap = new Map();
    for (let i = 0; i < nodes.length; i++) {
      posMap.set(nodes[i], i);
    }
    for (let pos = 0; pos < nodes.length; pos++) {
      if (nodes[pos] === sortedNodes[pos]) continue;

      const sortedPos = posMap.get(sortedNodes[pos]);
      posMap.set(nodes[pos], sortedPos);
      nodes[sortedPos] = nodes[pos];
      count++;
    }
    return count;
  }
};

// [1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10];
var root = {
  val: 1,
  left: {
    val: 4,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 8,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 10,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};
var expected = 3;
var result = minimumOperations(root);
console.log(result, result === expected);

// [1, 3, 2, 7, 6, 5, 4];
var root = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
};
var expected = 3;
var result = minimumOperations(root);
console.log(result, result === expected);

// [1, 2, 3, 4, 5, 6];
var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};
var expected = 0;
var result = minimumOperations(root);
console.log(result, result === expected);
