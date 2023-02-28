// 394. Decode String
// https://leetcode.com/problems/decode-string/
var decodeString = function (s: string): string {
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (ch !== ']') {
      stack.push(ch);
      continue;
    }

    let str = '';
    while (last() !== '[') {
      str = stack.pop() + str;
    }
    stack.pop();

    let times = 0;
    let base = 1;
    while (stack.length && isNumber(last())) {
      const num = Number(stack.pop());
      times += base * num;
      base *= 10;
    }

    stack.push(str.repeat(times));
  }

  if (stack.some(isNumber)) return '';
  return stack.join('');

  function last(): string {
    if (stack.length) return stack[stack.length - 1];
    return '';
  }
  function isNumber(ch: string): boolean {
    return ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57;
  }
};

var s = '3[a]2[bc]';
var expected = 'aaabcbc';
var result = decodeString(s);
console.log(result, result === expected);

var s = '3[a2[c]]';
var expected = 'accaccacc';
var result = decodeString(s);
console.log(result, result === expected);

var s = '2[abc]3[cd]ef';
var expected = 'abcabccdcdcdef';
var result = decodeString(s);
console.log(result, result === expected);

var s = '2[4]';
var expected = '44';
var result = decodeString(s);
console.log(result, result === expected);
