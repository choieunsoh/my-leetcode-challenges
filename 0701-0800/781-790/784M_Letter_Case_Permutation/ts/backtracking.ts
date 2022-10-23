// 784. Letter Case Permutation
// https://leetcode.com/problems/letter-case-permutation/
var letterCasePermutation = function (s: string): string[] {
  function isChar(char: string): boolean {
    return char >= '0' && char <= '9' ? false : true;
  }

  const result: string[] = [];
  const queue: string[] = [];

  function backtracking(charIndex = 0): void {
    if (queue.length === s.length) {
      result.push(queue.join(''));
      return;
    }

    const char = s[charIndex];
    queue.push(char);
    backtracking(charIndex + 1);
    queue.pop();

    if (isChar(char)) {
      queue.push(char.toUpperCase());
      backtracking(charIndex + 1);
      queue.pop();
    }
  }

  backtracking();
  return result;
};

var s = 'a1b2';
var expected = ['a1b2', 'a1B2', 'A1b2', 'A1B2'];
var result = letterCasePermutation(s);
console.log(result, result.join() === expected.join());

var s = '3z4';
var expected = ['3z4', '3Z4'];
var result = letterCasePermutation(s);
console.log(result, result.join() === expected.join());
