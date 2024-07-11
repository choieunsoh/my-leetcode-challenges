// 1190. Reverse Substrings Between Each Pair of Parentheses
// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [];
  const str = s.split('');
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(') {
      stack.push(result.length);
    } else if (ch === ')') {
      const start = stack.pop();
      reverse(start, result.length - 1);
    } else {
      result.push(ch);
    }
  }
  return result.join('');

  function reverse(left, right) {
    while (left < right) {
      [result[left], result[right]] = [result[right], result[left]];
      left++;
      right--;
    }
  }
};

var s = '(abcd)';
var expected = 'dcba';
var result = reverseParentheses(s);
console.log(result, result === expected);

var s = '(u(love)i)';
var expected = 'iloveu';
var result = reverseParentheses(s);
console.log(result, result === expected);

var s = '(ed(et(oc))el)';
var expected = 'leetcode';
var result = reverseParentheses(s);
console.log(result, result === expected);
