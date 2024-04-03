// 987. Vertical Order Traversal of a Binary Tree
// https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/
// T.C.: O(n log (n/k))
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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const result = [];
  const map = new Map();
  let [minCol, maxCol] = [0, 0];
  let queue = [[root, 0]];
  let row = 0;
  while (queue.length) {
    const newQueue = [];
    for (const [node, col] of queue) {
      const key = `${row},${col}`;
      if (!map.has(col)) {
        map.set(col, new Map());
      }
      if (!map.get(col).has(row)) {
        map.get(col).set(row, []);
      }

      map.get(col).get(row).push(node.val);
      minCol = Math.min(minCol, col);
      maxCol = Math.max(maxCol, col);

      if (node.left) newQueue.push([node.left, col - 1]);
      if (node.right) newQueue.push([node.right, col + 1]);
    }
    row++;
    queue = newQueue;
  }

  for (let col = minCol; col <= maxCol; col++) {
    const cols = [];
    for (const list of map.get(col).values()) {
      cols.push(...list.sort((a, b) => a - b));
    }
    result.push(cols);
  }

  return result;
};

// [3, 9, 20, null, null, 15, 7];
var root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var expected = [[9], [3, 15], [20], [7]];
var result = verticalTraversal(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 3, 4, 5, 6, 7];
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
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var expected = [[4], [2], [1, 5, 6], [3], [7]];
var result = verticalTraversal(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [1, 2, 3, 4, 6, 5, 7];
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
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
var expected = [[4], [2], [1, 5, 6], [3], [7]];
var result = verticalTraversal(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

// [3,1,4,0,2,2]
var root = {
  val: 3,
  left: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: null,
    },
  },
  right: {
    val: 4,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  },
};
var expected = [[0], [1], [3, 2, 2], [4]];
var result = verticalTraversal(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
