// 1111. Maximum Nesting Depth of Two Valid Parentheses Strings
// https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  let dep = 0;
  return seq.split('').map((value, index) => {
    if (value === '(') {
      dep++;
      return dep % 2;
    } else {
      const ans = dep % 2;
      dep--;
      return ans;
    }
  });
};

var seq = '(()())';
var expected = [1, 0, 0, 0, 0, 1];
var result = maxDepthAfterSplit(seq);
console.log(result, result.join() === expected.join());

var seq = '()(())()';
var expected = [1, 1, 1, 0, 0, 1, 1, 1];
var result = maxDepthAfterSplit(seq);
console.log(result, result.join() === expected.join());
