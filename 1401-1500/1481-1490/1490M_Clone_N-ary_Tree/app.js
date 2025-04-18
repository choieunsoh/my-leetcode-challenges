// 1490. Clone N-ary Tree
// https://leetcode.com/problems/clone-n-ary-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */
function _Node(val, children) {
  this.val = val === undefined ? 0 : val;
  this.children = children === undefined ? [] : children;
}

/**
 * @param {_Node|null} node
 * @return {_Node|null}
 */
var cloneTree = function (root) {
  if (!root) return root;

  const clonedNode = new _Node(root.val);
  for (const child of root.children) {
    clonedNode.children.push(cloneTree(child));
  }
  return clonedNode;
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
var result = cloneTree(root);
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
var result = cloneTree(root);
console.log(result, JSON.stringify(result) === JSON.stringify(root));
