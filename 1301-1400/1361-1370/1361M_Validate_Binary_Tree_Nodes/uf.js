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
  const uf = new UnionFind(n);
  for (let node = 0; node < n; node++) {
    const children = [leftChild[node], rightChild[node]];
    for (const child of children) {
      if (child === -1) continue;
      if (!uf.union(node, child)) return false;
    }
  }
  return uf.components === 1;
};

class UnionFind {
  constructor(n) {
    this.parents = Array.from({ length: n }, (_, i) => i);
    this.components = n;
    this.n = n;
  }

  find(node) {
    if (this.parents[node] === node) return node;
    return (this.parents[node] = this.find(this.parents[node]));
  }

  union(parent, child) {
    const parentParent = this.find(parent);
    const childParent = this.find(child);
    if (childParent !== child || childParent === parentParent) return false;

    this.components--;
    this.parents[childParent] = parentParent;
    return true;
  }
}

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
