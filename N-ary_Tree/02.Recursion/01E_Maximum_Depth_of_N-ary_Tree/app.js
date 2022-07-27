// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// 559. Maximum Depth of N-ary Tree
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0;
  if (!root) return maxDepth;

  dfs(root, 1);
  function dfs(node, depth) {
    if (!node) return;
    for (var i = 0; i < node.children.length; i++) {
      dfs(node.children[i], depth + 1);
    }
    maxDepth = Math.max(maxDepth, depth);
  }

  return maxDepth;
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
var expected = 3;
var result = maxDepth(createRoot(root));
console.log(result, result === expected);

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
var expected = 5;
var result = maxDepth(createRoot(root));
console.log(result, result === expected);
