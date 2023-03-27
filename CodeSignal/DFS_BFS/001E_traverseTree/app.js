// traverseTree
// LC-102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
/**
 * @param {Tree} t
 * @return {number[]}
 */
function traverseTree(t) {
  if (!t) return [];
  const result = [];
  let q = [t];
  while (q.length) {
    const qq = [];
    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      result.push(node.value);
      if (node.left) qq.push(node.left);
      if (node.right) qq.push(node.right);
    }
    q = qq;
  }
  return result;
}

var t = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 4,
    left: {
      value: 5,
      left: null,
      right: null,
    },
    right: null,
  },
};
var expected = [1, 2, 4, 3, 5];
var result = traverseTree(t);
console.log(result, result.join() === expected.join());
