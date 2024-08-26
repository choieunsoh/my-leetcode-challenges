// 590. N-ary Tree Postorder Traversal
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
// T.C.: O(n)
// S.C.: O(n)
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
var postorder = function (root) {
  const result = [];
  if (root === null) return result;

  const traverseStack = [root];
  const reverseStack = [];
  while (traverseStack.length) {
    const currentNode = traverseStack.pop();
    reverseStack.push(currentNode);

    for (const child of currentNode.children) {
      traverseStack.push(child);
    }
  }

  while (reverseStack.length) {
    const currentNode = reverseStack.pop();
    result.push(currentNode.val);
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
var expected = [5, 6, 3, 2, 4, 1];
var result = postorder(createRoot(root));
console.log(result, result.join() === expected.join());

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
var expected = [2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1];
var result = postorder(createRoot(root));
console.log(result, result.join() === expected.join());

var root = [];
var expected = [];
var result = postorder(createRoot(root));
console.log(result, result.join() === expected.join());
