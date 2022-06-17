// https://leetcode.com/problems/decode-string/
// 394. Decode String
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      stack.push(s[i]);
      continue;
    }

    let str = '';
    while (stack[stack.length - 1] !== '[') {
      str = stack.pop() + str;
    }
    stack.pop();

    let times = '';
    while (stack.length && isNaN(stack[stack.length - 1]) === false) {
      times = stack.pop() + times;
    }

    stack.push(str.repeat(+times));
  }

  return stack.join('');
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
