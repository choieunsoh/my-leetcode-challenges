// https://leetcode.com/problems/generate-parentheses/
// 22. Generate Parentheses
var generateParenthesis = function (n: number): string[] {
  const result: string[] = [];
  generate(0, []);
  return result;

  function generate(count: number, temp: string[]): void {
    if (count < 0 || count > n) return;
    if (temp.length === 2 * n) {
      if (count === 0) {
        result.push(temp.join(''));
      }
      return;
    }

    temp.push('(');
    generate(count + 1, temp);
    temp.pop();

    temp.push(')');
    generate(count - 1, temp);
    temp.pop();
  }
};

var n = 3;
var expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
var result = generateParenthesis(n);
console.log(result, result.join() === expected.join());

var n = 1;
var expected = ['()'];
var result = generateParenthesis(n);
console.log(result, result.join() === expected.join());
