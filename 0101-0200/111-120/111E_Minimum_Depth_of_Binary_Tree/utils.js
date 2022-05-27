function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var insertNode = function (tree, value) {
  let node = tree;
  while (node.value !== value) {
    const key = value < node.value ? 'left' : 'right';
    if (!node[key]) {
      node[key] = new TreeNode(value);
      break;
    }
    node = node[key];
  }
  return tree;
};

var createTree2 = function (list) {
  return list.reduce((t, v) => (t ? insertNode(t, v) : new TreeNode(v)), null);
};

var createTree = function (list, index = 0) {
  let tree = null;

  if (index < list.length) {
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

module.exports = {
  TreeNode,
  createTree,
  printTree,
};
