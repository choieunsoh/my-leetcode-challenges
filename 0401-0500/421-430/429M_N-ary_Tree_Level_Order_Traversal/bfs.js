// 429. N-ary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  while (queue.length) {
    const newQueue = [];
    const level = [];
    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];
      level.push(node.val);
      newQueue.push(...node.children);
    }
    result.push(level);
    queue = newQueue;
  }
  return result;
};

function Node(val, children = []) {
  this.val = val;
  this.children = children;
}
function createRoot(values) {
  if (values.length === 0) return null;
  const root = new Node(values[0]);
  let node = root;
  const childNodes = [node];
  for (let i = 1; i < values.length; i++) {
    let val = values[i];
    if (val === null) {
      node = childNodes.shift();
    } else {
      const child = new Node(val);
      node.children.push(child);
      childNodes.push(child);
    }
  }
  return root;
}

var root = [1, null, 3, 2, 4, null, 5, 6];
var expected = [[1], [3, 2, 4], [5, 6]];
var result = levelOrder(createRoot(root));
console.log(result.join(' '), result.join() === expected.join());

var root = [
  1,
  null,
  2,
  3,
  4,
  5,
  null,
  null,
  6,
  7,
  null,
  8,
  null,
  9,
  10,
  null,
  null,
  11,
  null,
  12,
  null,
  13,
  null,
  null,
  14,
];
var expected = [[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]];
var result = levelOrder(createRoot(root));
console.log(result.join(' '), result.join() === expected.join());
