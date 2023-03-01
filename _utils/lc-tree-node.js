class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function buildTree(inputArray) {
  const root = new TreeNode(inputArray.shift());
  const queue = [root];
  while (queue.length > 0 && inputArray.length > 0) {
    const curNode = queue.shift();
    const leftVal = inputArray.shift();
    const rightVal = inputArray.shift();
    if (leftVal !== null) {
      curNode.left = new TreeNode(leftVal);
      queue.push(curNode.left);
    }
    if (rightVal !== null) {
      curNode.right = new TreeNode(rightVal);
      queue.push(curNode.right);
    }
  }

  return root;
}

function serialize(root) {
  if (!root) return '';
  const result = [];
  dfs(root);
  return result.join(',');

  function dfs(node) {
    if (!node) {
      result.push('null');
      return;
    }

    result.push(node.val.toString());
    dfs(node.left);
    dfs(node.right);
  }
}

function deserialize(data) {
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

module.exports = {
  TreeNode,
  buildTree,
  serialize,
  deserialize,
};
