// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
// 297. Serialize and Deserialize Binary Tree
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { TreeNode, createTree } from '../../../../_utils/tree';
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
var testTree = function () {
  /*
   * Encodes a tree to a single string.
   */
  function serialize(root: TreeNode | null): string {
    if (!root) return '';
    const result: string[] = [];
    dfs(root);
    return result.join(',');

    function dfs(node: TreeNode | null): void {
      if (!node) {
        result.push('null');
        return;
      }

      result.push(node.val.toString());
      dfs(node.left);
      dfs(node.right);
    }
  }

  /*
   * Decodes your encoded data to tree.
   */
  function deserialize(data: string): TreeNode | null {
    if (!data) return null;
    const nodes = data.split(',');
    let index = 0;
    return dfs();

    function dfs() {
      if (nodes[index] === 'null') {
        index++;
        return null;
      }

      const node = new TreeNode(Number(nodes[index++]));
      node.left = dfs();
      node.right = dfs();
      return node;
    }
  }

  /**
   * Your functions will be called as such:
   * deserialize(serialize(root));
   */
  var root = createTree([1, 2, 3, null, null, 4, 5]);
  var data = serialize(root);
  var result = deserialize(data);
  console.log(data);
  console.log(result);
};
testTree();
