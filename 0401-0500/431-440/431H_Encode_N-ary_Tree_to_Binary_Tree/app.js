// 431. Encode N-ary Tree to Binary Tree
// https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children ?? [];
  }
}

function createNAryTree(values) {
  if (!values || values.length === 0 || values[0] === null) return null;

  const groups = [];
  let children = [];
  for (const value of values) {
    if (value !== null) {
      children.push(value);
    } else {
      groups.push([...children]);
      children = [];
    }
  }
  groups.push([...children]);

  const [rootVal] = groups.shift();
  const root = new Node(0);
  root.children.push(new Node(rootVal));
  let node = root;
  while (groups.length) {
    let index = 0;
    const max = node.children.length;
    const children = node.children;
    while (index < max && groups.length) {
      node = children[index++];
      const nodes = groups.shift();
      node.children = nodes.map((num) => new Node(num));
    }
  }
  return root.children[0];
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class Codec {
  constructor() {}

  /**
   * @param {Node|null} root
   * @return {TreeNode|null}
   */
  // Encodes an n-ary tree to a binary tree.
  encode = function (root) {
    if (!root) return null;

    const newRoot = new TreeNode(root.val);
    if (root.children.length > 0) {
      const firstChild = root.children[0];
      newRoot.left = this.encode(firstChild);
    }

    let sibling = newRoot.left;
    for (let i = 1; i < root.children.length; i++) {
      sibling.right = this.encode(root.children[i]);
      sibling = sibling.right;
    }

    return newRoot;
  };

  /**
   * @param {TreeNode|null} root
   * @return {Node|null}
   */
  // Decodes your binary tree to an n-ary tree.
  decode = function (root) {
    if (!root) return null;

    const newRoot = new Node(root.val, []);
    let sibling = root.left;
    while (sibling) {
      newRoot.children.push(this.decode(sibling));
      sibling = sibling.right;
    }

    return newRoot;
  };
}

/*
 * Your Codec object will be instantiated and called as such:
 * codec = Codec()
 * codec.decode(codec.encode(root))
 */

var codec = new Codec();

var root = createNAryTree([1, null, 3, 2, 4, null, 5, 6]);
var result = codec.decode(codec.encode(root));
console.log(result, JSON.stringify(root) === JSON.stringify(result));

// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
var root = {
  val: 1,
  children: [
    {
      val: 2,
      children: [],
    },
    {
      val: 3,
      children: [
        {
          val: 6,
          children: [],
        },
        {
          val: 7,
          children: [
            {
              val: 11,
              children: [
                {
                  val: 13,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      val: 4,
      children: [
        {
          val: 8,
          children: [
            {
              val: 12,
              children: [],
            },
          ],
        },
      ],
    },
    {
      val: 5,
      children: [
        {
          val: 9,
          children: [
            {
              val: 13,
              children: [],
            },
          ],
        },
        {
          val: 10,
          children: [],
        },
      ],
    },
  ],
};
var result = codec.decode(codec.encode(root));
console.log(result, JSON.stringify(root) === JSON.stringify(result));

var root = null;
var result = codec.decode(codec.encode(root));
console.log(result, JSON.stringify(root) === JSON.stringify(result));
