// 255. Verify Preorder Sequence in Binary Search Tree
// https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  let min = Number.MIN_SAFE_INTEGER;
  const stack = [];
  for (const num of preorder) {
    while (stack.length && num > stack[stack.length - 1]) {
      min = stack.pop();
    }
    if (num <= min) return false;
    stack.push(num);
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
