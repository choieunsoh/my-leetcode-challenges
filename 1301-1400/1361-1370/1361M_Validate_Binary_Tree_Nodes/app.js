// 1361. Validate Binary Tree Nodes
// https://leetcode.com/problems/validate-binary-tree-nodes/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  const rootId = getRootNode();
  if (rootId === -1) return false;

  const seen = new Set([rootId]);
  let queue = [rootId];
  while (queue.length) {
    const newQueue = [];
    for (const nodeId of queue) {
      const children = [leftChild[nodeId], rightChild[nodeId]];
      for (const childId of children) {
        if (childId === -1) continue;
        if (seen.has(childId)) return false;
        seen.add(childId);
        newQueue.push(childId);
      }
    }
    queue = newQueue;
  }
  return seen.size === n;

  function getRootNode() {
    const seen = new Set([...leftChild, ...rightChild]);
    for (let i = 0; i < n; i++) {
      if (!seen.has(i)) return i;
    }
    return -1;
  }
};

var n = 4,
  leftChild = [1, -1, 3, -1],
  rightChild = [2, -1, -1, -1];
var expected = true;
var result = validateBinaryTreeNodes(n, leftChild, rightChild);
console.log(result, result === expected);

var n = 4,
  leftChild = [1, -1, 3, -1],
  rightChild = [2, 3, -1, -1];
var expected = false;
var result = validateBinaryTreeNodes(n, leftChild, rightChild);
console.log(result, result === expected);

var n = 2,
  leftChild = [1, 0],
  rightChild = [-1, -1];
var expected = false;
var result = validateBinaryTreeNodes(n, leftChild, rightChild);
console.log(result, result === expected);
