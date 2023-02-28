// 652. Find Duplicate Subtrees
// https://leetcode.com/problems/find-duplicate-subtrees/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var findDuplicateSubtrees = function (root: TreeNode | null): TreeNode[] {
  const map = new Map();
  const counting = new Map();
  const result: TreeNode[] = [];
  dfs(root);
  return result;

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    const left = dfs(root.left);
    const right = dfs(root.right);
    const key = `${left},${root.val},${right}`;
    if (!map.has(key)) {
      map.set(key, map.size + 1);
    }

    const id = map.get(key) ?? 0;
    const count = counting.get(id) ?? 0;
    if (count === 1) {
      result.push(root);
    }
    counting.set(id, count + 1);

    return id;
  }
};

var root = createTree([1, 2, 3, 4, null, 2, 4, null, null, 4]);
var expected = [[2, 4], [4]];
var result = findDuplicateSubtrees(root);
console.log(result, result.join() === expected.join());

var root = createTree([2, 1, 1]);
var expected = [[1]];
var result = findDuplicateSubtrees(root);
console.log(result, result.join() === expected.join());

var root = createTree([2, 2, 2, 3, null, 3, null]);
var expected = [[2, 3], [3]];
var result = findDuplicateSubtrees(root);
console.log(result, result.join() === expected.join());
