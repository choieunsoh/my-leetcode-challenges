// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// 589. N-ary Tree Preorder Traversal
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  if (root === null) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
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
var expected = [1, 3, 5, 6, 2, 4];
var result = preorder(createRoot(root));
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
var expected = [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10];
var result = preorder(createRoot(root));
console.log(result.join(' '), result.join() === expected.join());

var root = [];
var expected = [];
var result = preorder(createRoot(root));
console.log(result.join(' '), result.join() === expected.join());
