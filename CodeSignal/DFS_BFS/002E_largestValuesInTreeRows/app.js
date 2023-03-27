// largestValuesInTreeRows
// LC-515. Find Largest Value in Each Tree Row
// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
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
function largestValuesInTreeRows(t) {
  if (!t) return [];
  const result = [];
  let q = [t];
  while (q.length) {
    const qq = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < q.length; i++) {
      const node = q[i];
      max = Math.max(max, node.value);
      if (node.left) qq.push(node.left);
      if (node.right) qq.push(node.right);
    }
    q = qq;
    result.push(max);
  }
  return result;
}

var t = {
  value: -1,
  left: {
    value: 5,
    left: null,
    right: null,
  },
  right: {
    value: 7,
    left: null,
    right: {
      value: 1,
      left: null,
      right: null,
    },
  },
};
var expected = [-1, 7, 1];
var result = largestValuesInTreeRows(t);
console.log(result, result.join() === expected.join());
