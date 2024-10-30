// 255. Verify Preorder Sequence in Binary Search Tree
// https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  let i = 0;
  return helper();

  function helper(minLimit = Number.MIN_SAFE_INTEGER, maxLimit = Number.MAX_SAFE_INTEGER) {
    if (i === preorder.length) return true;
    const rootVal = preorder[i++];
    if (rootVal <= minLimit || rootVal >= maxLimit) return false;
    return helper(minLimit, rootVal) || helper(rootVal, maxLimit);
  }
};

var preorder = [5, 2, 1, 3, 6];
var expected = true;
var result = verifyPreorder(preorder);
console.log(result, result === expected);

var preorder = [5, 2, 6, 1, 3];
var expected = false;
var result = verifyPreorder(preorder);
console.log(result, result === expected);

var preorder = [5, 2, 1, 10, 6];
var expected = true;
var result = verifyPreorder(preorder);
console.log(result, result === expected);

var preorder = [2, 1];
var expected = true;
var result = verifyPreorder(preorder);
console.log(result, result === expected);
