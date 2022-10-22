// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
var rightSideView = function (root: TreeNode | null): number[] {
  if (!root) return [];
  const result: number[] = [];
  const queue = [root];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node) {
        if (i === size - 1) result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }
  return result;
};

var root = createTree([1, 2, 3, null, 5, null, 4]);
var expected = [1, 3, 4];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());

var root = createTree([1, null, 3]);
var expected = [1, 3];
var result = rightSideView(root);
console.log(result, expected.join() === result.join());
