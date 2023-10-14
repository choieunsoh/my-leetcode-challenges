// 331. Verify Preorder Serialization of a Binary Tree
// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const nodes = preorder.split(',');
  const stack = [];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] === '#') {
      while (stack.length > 1 && stack.at(-1) === '#' && stack.at(-2) !== '#') {
        stack.pop();
        stack.pop();
      }
    }
    stack.push(nodes[i]);
  }

  return stack.length === 1 && stack[0] === '#';
};

var preorder = '9,3,4,#,#,1,#,#,2,#,6,#,#';
var expected = true;
var result = isValidSerialization(preorder);
console.log(result, result === expected);

var preorder = '1,#';
var expected = false;
var result = isValidSerialization(preorder);
console.log(result, result === expected);

var preorder = '9,#,#,1';
var expected = false;
var result = isValidSerialization(preorder);
console.log(result, result === expected);
