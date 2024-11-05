// 1506. Find Root of N-Ary Tree
// https://leetcode.com/problems/find-root-of-n-ary-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {_Node[]} tree
 * @return {_Node}
 */
var findRoot = function (tree) {
  const seen = new Set();
  for (const node of tree) {
    for (const child of node.children) {
      seen.add(child.val);
    }
  }

  for (const node of tree) {
    if (!seen.has(node.val)) return node;
  }
  return null;
};

// [1, null, 3, 2, 4, null, 5, 6];
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
var tree = [root, ...root.children, ...root.children[0].children];
var result = findRoot(tree);
console.log(result, JSON.stringify(result) === JSON.stringify(root));

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
var tree = [
  root,
  ...root.children,
  ...root.children[1].children,
  ...root.children[2].children,
  ...root.children[3].children,
  ...root.children[1].children[1].children,
  ...root.children[1].children[1].children[0].children,
  ...root.children[2].children[0].children,
  ...root.children[3].children[0].children,
];
var result = findRoot(tree);
console.log(result, JSON.stringify(result) === JSON.stringify(root));
