// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
// T.C.: O(4^n * n)
// S.C.: O(n)
var generateParenthesis = function (n) {
  const result = [];

  const gen = (curr = [], count = 0) => {
    if (count > n || count < 0) return;
    if (curr.length === n * 2) {
      if (count === 0) {
        result.push(curr.join(''));
      }
      return;
    }
    curr.push('(');
    gen(curr, count + 1);
    curr.pop();

    curr.push(')');
    gen(curr, count - 1);
    curr.pop();
  };
  gen();
  return result;
};

var n = 3;
var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());

var n = 1;
var expected = ['()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());
