// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
var firstUniqChar = function (s: string): number {
  const a = 'a'.charCodeAt(0);
  const counting = Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    if (counting[ch] !== -1) {
      counting[ch] = s.length;
    } else {
      counting[ch] = i;
    }
  }

  let min = s.length;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    if (counting[ch] !== -1 && counting[ch] < min) {
      min = counting[ch];
    }
  }

  return min === s.length ? -1 : min;
};

var s = 'leetcode';
var expected = 0;
var result = firstUniqChar(s);
console.log(result, result === expected);

var s = 'loveleetcode';
var expected = 2;
var result = firstUniqChar(s);
console.log(result, result === expected);

var s = 'aabb';
var expected = -1;
var result = firstUniqChar(s);
console.log(result, result === expected);
