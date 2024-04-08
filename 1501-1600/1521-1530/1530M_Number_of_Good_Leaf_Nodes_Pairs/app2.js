// 1530. Number of Good Leaf Nodes Pairs
// https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/description/
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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let countShortestPairs = 0;
  getCountShortestPairs(root, distance);
  return countShortestPairs;

  function getCountShortestPairs(node, maxPathSize) {
    if (node === null) return new Array(maxPathSize + 1).fill(0);

    if (node.left === null && node.right === null) {
      const pathSizeToPathCount = new Array(maxPathSize + 1).fill(0);
      pathSizeToPathCount[1] = 1;
      return pathSizeToPathCount;
    }

    const leftPathsCount = getCountShortestPairs(node.left, maxPathSize);
    const rightPathsCount = getCountShortestPairs(node.right, maxPathSize);

    for (let leftPathSize = 1; leftPathSize < leftPathsCount.length; leftPathSize++) {
      for (let rightPathSize = 1; rightPathSize < rightPathsCount.length; rightPathSize++) {
        if (leftPathSize + rightPathSize > maxPathSize) break;
        countShortestPairs += leftPathsCount[leftPathSize] * rightPathsCount[rightPathSize];
      }
    }

    let newPathSizeToPathCount = new Array(maxPathSize + 1).fill(0);

    for (let pathSize = 1; pathSize < newPathSizeToPathCount.length - 1; pathSize++) {
      newPathSizeToPathCount[pathSize + 1] = leftPathsCount[pathSize] + rightPathsCount[pathSize];
    }

    return newPathSizeToPathCount;
  }
};

// [1,2,3,null,4]
var root = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  distance = 3;
var expected = 1;
var result = countPairs(root, distance);
console.log(result, result === expected);

// [1, 2, 3, 4, 5, 6, 7]
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
  },
  distance = 3;
var expected = 2;
var result = countPairs(root, distance);
console.log(result, result === expected);

// [7, 1, 4, 6, null, 5, 3, null, null, null, null, null, 2]
var root = {
    val: 7,
    left: {
      val: 1,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 5,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: {
          val: 2,
          left: null,
          right: null,
        },
      },
    },
  },
  distance = 3;
var expected = 1;
var result = countPairs(root, distance);
console.log(result, result === expected);

// [1,1,1]
var root = {
    val: 1,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
  distance = 2;
var expected = 1;
var result = countPairs(root, distance);
console.log(result, result === expected);
