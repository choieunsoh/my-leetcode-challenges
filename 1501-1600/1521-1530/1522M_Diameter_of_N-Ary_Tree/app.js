// 1522. Diameter of N-Ary Tree
// https://leetcode.com/problems/diameter-of-n-ary-tree/description/
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
 * @param {_Node} root
 * @return {number}
 */
var diameter = function (root) {
  let maxDiameter = 0;
  height(root);
  return maxDiameter;

  function height(root) {
    if (root.children.length === 0) {
      return 0;
    }

    let maxChildHeight = 0;
    let maxSecondChildHeight = 0;
    for (const child of root.children) {
      const childHeight = 1 + height(child);
      if (childHeight > maxChildHeight) {
        maxSecondChildHeight = maxChildHeight;
        maxChildHeight = childHeight;
      } else if (childHeight > maxSecondChildHeight) {
        maxSecondChildHeight = childHeight;
      }

      const diameter = maxChildHeight + maxSecondChildHeight;
      if (diameter > maxDiameter) {
        maxDiameter = diameter;
      }
    }

    return maxChildHeight;
  }
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
var expected = 3;
var result = diameter(root);
console.log(result, result === expected);

// [1, null, 2, null, 3, 4, null, 5, null, 6];
var root = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 3,
          children: [
            {
              val: 5,
              children: [
                {
                  val: 6,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          val: 4,
          children: [],
        },
      ],
    },
  ],
};
var expected = 4;
var result = diameter(root);
console.log(result, result === expected);

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
var expected = 7;
var result = diameter(root);
console.log(result, result === expected);
