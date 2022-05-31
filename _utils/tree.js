function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var createTree = function (list, index = 0) {
  let tree = null;

  if (index < list.length && list[index] !== null) {
    tree = new TreeNode(list[index]);
    tree.left = createTree(list, 2 * index + 1);
    tree.right = createTree(list, 2 * index + 2);
  }

  return tree;
};

var printTree = function (root) {
  const x = [root.val];

  const add = (root) => {
    if (root !== null) {
      if (root.left || root.right) {
        x.push(root.left?.val ? root.left.val : 'null');
        x.push(root.right?.val ? root.right.val : 'null');
      }

      add(root.left);
      add(root.right);
    }
  };
  add(root);

  console.log(x.join(' '));
};

var inOrder = function (root) {
  const result = [];

  const helper = (node) => {
    if (node) {
      node.left && helper(node.left);
      result.push(node.val);
      node.right && helper(node.right);
    }
  };
  helper(root);

  return result;
};

module.exports = {
  TreeNode,
  createTree,
  printTree,
  inOrder,
};
