function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createTree(values, i = 0) {
  if (values.length === 0 || values[i] === undefined) return null;

  let tree = new TreeNode(values[i]);
  // Left
  tree.left = createTree(values, i * 2 + 1);
  // Right
  tree.right = createTree(values, i * 2 + 2);

  return tree;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees1 = function (r1, r2) {
  if (r1 === null && r2 === null) return null;

  let tree = null;
  if (r1?.val || r2?.val || r1?.val === 0 || r2?.val === 0) {
    let value = (r1?.val || 0) + (r2?.val || 0);
    if (tree === null) {
      tree = new TreeNode(value);
    }
    // Left
    tree.left = mergeTrees(r1?.left, r2?.left);
    // Right
    tree.right = mergeTrees(r1?.right, r2?.right);
  }

  return tree;
};
var mergeTrees = function (r1, r2) {
  if (r1 === null && r2 === null) return null;
  if (r1 === null) return r2;
  if (r2 === null) return r1;

  r1.val += r2.val;
  // Left
  r1.left = mergeTrees(r1.left, r2.left);
  // Right
  r1.right = mergeTrees(r1.right, r2.right);

  return r1;
};
var root1 = [3, 4, 5, 1, 2, null, null, 0];
var root2 = [4, 1, 2];

var tree1 = createTree(root1);
var tree2 = createTree(root2);
var tree3 = mergeTrees(tree1, tree2);
console.log(tree3);
