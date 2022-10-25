// https://leetcode.com/problems/same-tree/
// 100. Same Tree
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
var isSameTree = function (p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

type Value100 = (number | null)[];
var p: Value100 = [1, 2],
  q: Value100 = [1, null, 2],
  expect = false;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, result === expect);

var p: Value100 = [1, 2, 3],
  q: Value100 = [1, 2, 3],
  expect = true;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, result === expect);

var p: Value100 = [1, 2, 1],
  q: Value100 = [1, 1, 2],
  expect = false;
var result = isSameTree(createTree(p), createTree(q));
console.log(result, result === expect);
