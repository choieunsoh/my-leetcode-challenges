// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// 116. Populating Next Right Pointers in Each Node
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { printTree } from '../../../../_utils/tree';
// Definition for Node.
class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
var createTree = function (list: number[], index = 0): Node | null {
  if (index >= list.length || list[index] === null) {
    return null;
  }

  const root = new Node(list[index]);
  root.left = createTree(list, 2 * index + 1);
  root.right = createTree(list, 2 * index + 2);

  return root;
};
/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root: Node | null): Node | null => {
  if (!root) return null;
  if (root.left && root.right) {
    root.left.next = root.right;
  }
  if (root.right && root.next) {
    root.right.next = root.next.left;
  }
  if (root.left) {
    root.left = connect(root.left);
  }
  if (root.right) {
    root.right = connect(root.right);
  }
  return root;
};

var root = createTree([1, 2, 3, 4, 5, 6, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 6, 7, '#'];
var result = connect(root);
printTree(result, 'level');
console.log(expected.join(' '));
