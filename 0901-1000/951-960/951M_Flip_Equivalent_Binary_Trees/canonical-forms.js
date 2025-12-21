// 951. Flip Equivalent Binary Trees
// https://leetcode.com/problems/flip-equivalent-binary-trees/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  findCanonicalForm(root1);
  findCanonicalForm(root2);
  return areEquivalent(root1, root2);

  function findCanonicalForm(root) {
    if (!root) return;

    // Post-order traversal: first bring subtrees into their canonical form
    findCanonicalForm(root.left);
    findCanonicalForm(root.right);

    if (!root.right) return;

    // Swap subtrees, so that left is non-empty
    if (!root.left) {
      root.left = root.right;
      root.right = null;
      return;
    }

    const left = root.left;
    const right = root.right;
    // Swap subtrees
    if (left.val > right.val) {
      root.left = right;
      root.right = left;
    }
  }

  function areEquivalent(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;

    return areEquivalent(root1.left, root2.left) && areEquivalent(root1.right, root2.right);
  }
};

// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8];
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};
// [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]
var root2 = {
  val: 1,
  left: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  },
};
var expected = true;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);

// []
var root1 = {};
// []
var root2 = {};
var expected = true;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);

// []
var root1 = {};
// [1]
var root2 = {
  val: 1,
  left: null,
  right: null,
};
var expected = false;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);

// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8];
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};
// [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 17]
var root2 = {
  val: 1,
  left: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 17,
        left: null,
        right: null,
      },
    },
  },
};
var expected = false;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);

// [1, 2, 3, 4, 5, 6, null, null, null, 7, 8];
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};
// [11, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7]
var root2 = {
  val: 11,
  left: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  },
};
var expected = false;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);

// [1, 2, 3]
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
// [1, 3, 2]
var root2 = {
  val: 1,
  left: {
    val: 3,
    left: null,
    right: null,
  },
  right: {
    val: 2,
    left: null,
    right: null,
  },
};
var expected = true;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);

// [1, 2, 3]
var root1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
// [1, 2, 3]
var root2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};
var expected = true;
var result = flipEquiv(root1, root2);
console.log(result, result === expected);
