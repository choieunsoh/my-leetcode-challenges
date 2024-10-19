// 439. Ternary Expression Parser
// https://leetcode.com/problems/ternary-expression-parser/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  let index = 0;
  // Construct Binary Tree
  let root = constructTree(expression);

  // Parse the binary tree till we reach the leaf node
  while (root.left !== null && root.right !== null) {
    if (root.val === 'T') {
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return root.val;

  function constructTree(expression) {
    // Storing current character of expression
    const root = new TreeNode(expression[index]);

    // If last character of expression, return
    if (index === expression.length - 1) {
      return root;
    }

    // Check next character
    index++;
    if (expression[index] === '?') {
      index++;
      root.left = constructTree(expression);
      index++;
      root.right = constructTree(expression);
    }

    return root;
  }
};

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var expression = 'T?2:3';
var expected = '2';
var result = parseTernary(expression);
console.log(result, result === expected);

var expression = 'F?1:T?4:5';
var expected = '4';
var result = parseTernary(expression);
console.log(result, result === expected);

var expression = 'T?T?F:5:3';
var expected = 'F';
var result = parseTernary(expression);
console.log(result, result === expected);
