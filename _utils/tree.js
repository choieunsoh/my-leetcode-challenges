function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var createTree = function (list, index = 0) {
  if (index >= list.length || list[index] === null) {
    return null;
  }

  const root = new TreeNode(list[index]);
  root.left = createTree(list, 2 * index + 1);
  root.right = createTree(list, 2 * index + 2);

  return root;
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
  if (!root) return result;

  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      if (node.left || node.right) {
        queue.push(node.left);
        queue.push(node.right);
      }
    } else if (queue.length) {
      result.push(null);
    }
  }
  return result;
};

var printPreOrderTree = function (root) {
  const result = preOrder(root);
  console.log(result.join(' '));
};

function toLevelOrderArray(tree) {
  const result = [];
  const q = [tree];
  while (q.length) {
    const node = q.shift();
    if (!node) {
      result.push(node);
      continue;
    }

    result.push(node.val);
    if (node.left) {
      q.push(node.left);
    } else {
      q.push(null);
    }
    if (node.right) {
      q.push(node.right);
    } else {
      q.push(null);
    }
  }

  while (result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

module.exports = {
  TreeNode,
  createTree,
  printTree,
  inOrder,
  preOrder,
  postOrder,
  levelOrder,
  toLevelOrderArray,
};
