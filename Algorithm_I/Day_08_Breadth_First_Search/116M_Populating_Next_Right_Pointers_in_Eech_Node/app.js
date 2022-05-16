function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

function createTree(values, i = 0) {
  if (values.length === 0 || values[i] === undefined) return null;

  let tree = new Node(values[i]);
  // Left
  tree.left = createTree(values, i * 2 + 1);
  // Right
  tree.right = createTree(values, i * 2 + 2);

  return tree;
}

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
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

var root = [1, 2, 3, 4, 5, 6, 7];
var tree = connect(createTree(root));
console.log(tree.right);
