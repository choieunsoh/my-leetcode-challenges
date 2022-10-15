// https://leetcode.com/problems/backspace-string-compare/
// 844. Backspace String Compare
var backspaceCompare = function (s: string, t: string): boolean {
  const sStack: string[] = [];
  const tStack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      sStack.pop();
    } else {
      sStack.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === '#') {
      tStack.pop();
    } else {
      tStack.push(t[i]);
    }
  }
  return sStack.join() === tStack.join();
};

var s = 'ab#c',
  t = 'ad#c';
var expected = true;
var result = backspaceCompare(s, t);
console.log(result, result === expected);

var s = 'ab##',
  t = 'c#d#';
var expected = true;
var result = backspaceCompare(s, t);
console.log(result, result === expected);

var s = 'a#c',
  t = 'b';
var expected = false;
var result = backspaceCompare(s, t);
console.log(result, result === expected);
