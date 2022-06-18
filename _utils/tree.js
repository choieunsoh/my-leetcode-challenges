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

const treeType = {
  in: (root) => inOrder(root),
  pre: (root) => preOrder(root),
  post: (root) => postOrder(root),
  level: (root) => levelOrder(root),
};
var printTree = function (root, type = 'in') {
  const result = treeType[type](root);
  console.log(result.join(' '));
};

var inOrder = function (root) {
  const result = [];

  // left > root > right
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

var preOrder = function (root) {
  const result = [];

  // root > left > right
  const helper = (node) => {
    if (node) {
      result.push(node.val);
      node.left && helper(node.left);
      node.right && helper(node.right);
    }
  };
  helper(root);

  return result;
};

var postOrder = function (root) {
  const result = [];

  // left > right > root
  const helper = (node) => {
    if (node) {
      node.left && helper(node.left);
      node.right && helper(node.right);
      result.push(node.val);
    }
  };
  helper(root);

  return result;
};

var levelOrder = function (root) {
  const result = [];

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

var printPreOrderTree = function (root) {
  const result = preOrder(root);
  console.log(result.join(' '));
};

module.exports = {
  TreeNode,
  createTree,
  printTree,
  inOrder,
  preOrder,
  postOrder,
  levelOrder,
};
