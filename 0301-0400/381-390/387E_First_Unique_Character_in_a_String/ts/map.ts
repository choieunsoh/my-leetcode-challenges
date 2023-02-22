// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
var firstUniqChar = function (s: string): number {
  const counting = new Map<string, number>();
  for (const ch of s) {
    const count = counting.get(ch) ?? 0;
    counting.set(ch, count + 1);
  }
  for (let i = 0; i < s.length; i++) {
    const count = counting.get(s[i]) ?? 0;
    if (count === 1) return i;
  }

  return -1;
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
