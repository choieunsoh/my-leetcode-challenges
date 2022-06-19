// https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/
// 117. Populating Next Right Pointers in Each Node II
class TreeNode {
  val: number | null;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;
  constructor(
    val: number | null,
    left?: TreeNode,
    right?: TreeNode,
    next?: TreeNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

var createTree = function (
  list: Array<number | null>,
  index = 0
): TreeNode | null {
  let tree: TreeNode | null = null;

  if (index < list.length && list[index] !== null) {
    tree = new TreeNode(list[index]);
    tree.left = createTree(list, 2 * index + 1);
    tree.right = createTree(list, 2 * index + 2);
  }

  return tree;
};

var levelOrder = function (root: TreeNode | null) {
  const result: Array<number | '#' | null> = [];

  // root > left > right
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      !node.next && result.push('#');
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return result;
};

function connect(root: TreeNode | null): TreeNode | null {
  function findNext(node: TreeNode | null): TreeNode | null {
    while (node) {
      if (node.left) return node.left;
      if (node.right) return node.right;
      node = node.next;
    }
    return null;
  }

  if (!root) return null;

  if (root.left) {
    root.left.next = root.right ?? findNext(root.next);
  }

  if (root.right) {
    root.right.next = findNext(root.next);
  }

  root.right && connect(root.right);
  root.left && connect(root.left);

  return root;
}

var root: TreeNode | null = createTree([1, 2, 3, 4, 5, null, 7]);
var expected = [1, '#', 2, 3, '#', 4, 5, 7, '#'];
var result = levelOrder(connect(root));
console.log(result.join(' '));
console.log(expected.join(' '));
