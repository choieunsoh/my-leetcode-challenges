// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
var isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const a = 'a'.charCodeAt(0);
  const counting = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    counting[ch]++;
  }
  for (let i = 0; i < t.length; i++) {
    const ch = t.charCodeAt(i) - a;
    if (counting[ch]-- === 0) return false;
  }

  return true;
};

var s = 'anagram',
  t = 'nagaram';
var expected = true;
var result = isAnagram(s, t);
console.log(result, result === expected);

var s = 'rat',
  t = 'car';
var expected = false;
var result = isAnagram(s, t);
console.log(result, result === expected);
