// 2196. Create Binary Tree From Descriptions
// https://leetcode.com/problems/create-binary-tree-from-descriptions/description/
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
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
  const treeMap = new Map();
  const children = new Set();
  for (const [parent, child, isLeft] of descriptions) {
    if (!treeMap.has(parent)) {
      treeMap.set(parent, new TreeNode(parent));
    }
    if (!treeMap.has(child)) {
      treeMap.set(child, new TreeNode(child));
    }
    const parentNode = treeMap.get(parent);
    const childNode = treeMap.get(child);
    if (isLeft) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    children.add(child);
  }

  for (const [parent] of descriptions) {
    if (!children.has(parent)) {
      return treeMap.get(parent);
    }
  }

  return null;
};

var descriptions = [
  [20, 15, 1],
  [20, 17, 0],
  [50, 20, 1],
  [50, 80, 0],
  [80, 19, 1],
];
// [50,20,80,15,17,19]
var expected = {
  val: 50,
  left: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 17,
      left: null,
      right: null,
    },
  },
  right: {
    val: 80,
    left: {
      val: 19,
      left: null,
      right: null,
    },
    right: null,
  },
};
var result = createBinaryTree(descriptions);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var descriptions = [
  [1, 2, 1],
  [2, 3, 0],
  [3, 4, 1],
];
// [1,2,null,null,3,4]
var expected = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: null,
};
var result = createBinaryTree(descriptions);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
