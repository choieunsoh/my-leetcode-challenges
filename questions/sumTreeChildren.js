/**
 * @typedef {Object} TreeNode
 * @property {number} value
 * @property {TreeNode} left
 * @property {TreeNode} right
 */
/**
 *
 * @param {TreeNode} root
 * @returns {TreeNode}
 */
function treeDiameter(root) {
  const newRoot = JSON.parse(JSON.stringify(root));
  let queue = [newRoot];
  while (queue.length) {
    const nextQueue = [];
    for (const node of queue) {
      if (node.left || node.right) {
        node.value = (node.left?.value ?? 0) + (node.right?.value ?? 0);
      }
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
  }
  console.log(root);
  return newRoot;
}

var root = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
  },
  right: {
    value: 3,
  },
};
var expected = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 4,
    },
  },
  right: {
    value: 3,
  },
};
var result = treeDiameter(root);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
