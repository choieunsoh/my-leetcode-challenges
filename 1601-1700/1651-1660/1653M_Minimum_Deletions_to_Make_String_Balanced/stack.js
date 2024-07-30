// 1653. Minimum Deletions to Make String Balanced
// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const n = s.length;
  let result = 0;
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (stack.length && stack.at(-1) === 'b' && s.charAt(i) === 'a') {
      stack.pop();
      result++;
    } else {
      stack.push(s.charAt(i));
    }
  }
  return result;
};

var s = 'aababbab';
var expected = 2;
var result = minimumDeletions(s);
console.log(result, result === expected);

var s = 'bbaaaaabb';
var expected = 2;
var result = minimumDeletions(s);
console.log(result, result === expected);
