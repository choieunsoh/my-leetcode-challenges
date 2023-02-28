// 394. Decode String
// https://leetcode.com/problems/decode-string/
var decodeString = function (s: string): string {
  const stack: [number, string][] = [];
  let currentString = '';
  let currentMultiplier = 0;

  for (let ch of s) {
    if (ch === '[') {
      stack.push([currentMultiplier, currentString]);
      currentMultiplier = 0;
      currentString = '';
    } else if (ch === ']') {
      const [prevMultiplier, prevString] = stack.pop()!;
      currentString = prevString + currentString.repeat(prevMultiplier);
    } else if (!isNaN(Number(ch))) {
      currentMultiplier = currentMultiplier * 10 + +ch;
    } else {
      currentString += ch;
    }
  }

  return currentString;
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
