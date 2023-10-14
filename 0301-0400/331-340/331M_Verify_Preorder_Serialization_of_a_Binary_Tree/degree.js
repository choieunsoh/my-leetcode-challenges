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
  let degree = 1;
  for (const node of nodes) {
    // Decrement the degree by 1 for each node
    degree--;

    // If the degree is negative, return false
    if (degree < 0) return false;

    // If the node is not a leaf node
    if (node !== '#') degree += 2;
  }

  // If the final degree is 0, the tree is valid, else invalid
  return degree === 0;
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
