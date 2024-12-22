// 431. Encode N-ary Tree to Binary Tree
// https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
const { TreeNode, createTree, inOrder } = require('../../../_utils/tree');
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Codec {
  // Encodes an n-ary tree to a binary tree.
  encode(root) {
    if (!root) return null;

    const newRoot = new TreeNode(root.val);
    const queue = [[newRoot, root]];

    while (queue.length > 0) {
      const [bNode, nNode] = queue.shift();

      let prevBNode = null;
      let headBNode = null;

      for (const nChild of nNode.children) {
        const newBNode = new TreeNode(nChild.val);
        if (!prevBNode) {
          headBNode = newBNode;
        } else {
          prevBNode.right = newBNode;
        }
        prevBNode = newBNode;

        queue.push([newBNode, nChild]);
      }

      bNode.left = headBNode;
    }

    return newRoot;
  }

  // Decodes your binary tree to an n-ary tree.
  decode(root) {
    if (!root) return null;

    const newRoot = new Node(root.val);
    const queue = [[newRoot, root]];

    while (queue.length > 0) {
      const [nNode, bNode] = queue.shift();

      let sibling = bNode.left;

      while (sibling) {
        const nChild = new Node(sibling.val);
        nNode.children.push(nChild);

        queue.push([nChild, sibling]);
        sibling = sibling.right;
      }
    }

    return newRoot;
  }
}

/*
 * Your Codec object will be instantiated and called as such:
 * codec = Codec()
 * codec.decode(codec.encode(root))
 */

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
