// 428. Serialize and Deserialize N-ary Tree
// https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Codec {
  constructor() {}

  /**
   * @param {Node|null} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    if (!root) return '#';

    const result = [];
    dfs(root);
    return result.join(',');

    function dfs(node) {
      if (!node) return;

      result.push(node.val);
      if (node.children.length > 0) {
        result.push(node.children.length);
        for (const child of node.children) {
          dfs(child);
        }
      } else {
        result.push('#');
      }
    }
  };

  /**
   * @param {string} data
   * @return {Node|null}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    const nodes = data.split(',');
    if (nodes.length === 1) return null;
    let index = 0;
    return dfs(nodes);

    function dfs(node) {
      if (!node.length) return;

      const val = node[index++];
      const tree = new Node(Number(val), []);
      const size = node[index++];
      for (let i = 0; i < size; i++) {
        tree.children.push(dfs(node));
      }

      return tree;
    }
  };
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));

var codec = new Codec();

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
                  val: 14,
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
var result = codec.deserialize(codec.serialize(root));
console.log(result, JSON.stringify(root) === JSON.stringify(result));

// [1,null,3,2,4,null,5,6]
var root = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [],
        },
        {
          val: 6,
          children: [],
        },
      ],
    },
    {
      val: 2,
      children: [],
    },
    {
      val: 4,
      children: [],
    },
  ],
};
var result = codec.deserialize(codec.serialize(root));
console.log(result, JSON.stringify(root) === JSON.stringify(result));

// [];
var root = null;
var result = codec.deserialize(codec.serialize(root));
console.log(result, JSON.stringify(root) === JSON.stringify(result));
