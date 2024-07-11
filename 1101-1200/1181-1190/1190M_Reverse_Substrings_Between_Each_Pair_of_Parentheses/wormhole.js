// 1190. Reverse Substrings Between Each Pair of Parentheses
// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const n = s.length;
  const pairs = new Array(n);
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      const j = stack.pop();
      pairs[i] = j;
      pairs[j] = i;
    }
  }

  let result = '';
  for (let i = 0, direction = 1; i < n; i += direction) {
    if (s[i] === '(' || s[i] === ')') {
      i = pairs[i];
      direction *= -1;
    } else {
      result += s[i];
    }
  }

  return result;
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
