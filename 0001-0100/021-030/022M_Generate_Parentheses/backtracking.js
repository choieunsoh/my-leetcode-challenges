// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/
// T.C.: O(4^n / sqrt(n))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const answer = [];
  backtracking(answer, '', 0, 0, n);
  return answer;

  function backtracking(answer, curString, leftCount, rightCount, n) {
    if (curString.length === 2 * n) {
      answer.push(curString);
      return;
    }
    if (leftCount < n) {
      curString += '(';
      backtracking(answer, curString, leftCount + 1, rightCount, n);
      curString = curString.slice(0, -1);
    }
    if (leftCount > rightCount) {
      curString += ')';
      backtracking(answer, curString, leftCount, rightCount + 1, n);
      curString = curString.slice(0, -1);
    }
  }
};

var n = 3;
var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());

var n = 1;
var expected = ['()'];
var result = generateParenthesis(n);
console.log(result, result.toString() === expected.toString());
