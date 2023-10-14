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
  if (nodes[0] === '#') return nodes.length === 1;

  let nonLeaves = 2;
  for (let i = 1; i < nodes.length; i++) {
    if (nonLeaves === 0) return false;
    if (nodes[i] === '#') {
      nonLeaves--;
    } else {
      nonLeaves++;
    }
  }
  return nonLeaves === 0;
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
