// 255. Verify Preorder Sequence in Binary Search Tree
// https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  let min = Number.MIN_SAFE_INTEGER;
  let i = 0;
  for (const num of preorder) {
    while (i > 0 && num > preorder[i - 1]) {
      min = preorder[i - 1];
      i--;
    }
    if (num <= min) return false;
    preorder[i] = num;
    i++;
  }
  return true;
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
