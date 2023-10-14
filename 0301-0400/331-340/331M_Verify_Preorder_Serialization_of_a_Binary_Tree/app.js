// 331. Verify Preorder Serialization of a Binary Tree
// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  let index = 0;
  let leaves = 0;
  let nonLeaves = 0;
  const nodes = preorder.split(',');
  while (index < nodes.length) {
    const node = nodes[index++];
    if (node === '#') {
      leaves++;
    } else {
      nonLeaves++;
    }
    if (leaves === nonLeaves + 1) {
      break;
    }
  }
  return leaves === nonLeaves + 1 && index === nodes.length;
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
