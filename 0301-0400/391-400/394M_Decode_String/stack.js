// 394. Decode String
// https://leetcode.com/problems/decode-string/
// T.C.: O(maxK^countK*n)
// S.C.: O(sum(maxK^countK*n))
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (const ch of s) {
    if (ch !== ']') {
      stack.push(ch);
      continue;
    }

    let decodedString = '';
    while (stack[stack.length - 1] !== '[') {
      decodedString = stack.pop() + decodedString;
    }
    stack.pop();

    let base = 1;
    let k = 0;
    while (stack.length && isNumber(stack[stack.length - 1])) {
      k += base * Number(stack.pop());
      base *= 10;
    }

    // k[decodedString]
    while (k--) {
      stack.push(decodedString);
    }
  }

  return stack.join('');

  function isNumber(ch) {
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
