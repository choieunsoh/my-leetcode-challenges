// 423. Reconstruct Original Digits from English
// https://leetcode.com/problems/reconstruct-original-digits-from-english/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
  const nums = [
    [0, 'zero', 'z'],
    [2, 'two', 'w'],
    [4, 'four', 'u'],
    [6, 'six', 'x'],
    [8, 'eight', 'g'],
    [1, 'one', 'o'],
    [3, 'three', 'h'],
    [5, 'five', 'f'],
    [7, 'seven', 'v'],
    [9, 'nine', 'e'],
  ];

  const a = 'a'.charCodeAt(0);
  const chars = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    chars[s.charCodeAt(i) - a]++;
  }

  const counter = new Array(10);
  for (const [num, word, ch] of nums) {
    const count = chars[ch.charCodeAt(0) - a];
    for (const c of word) {
      chars[c.charCodeAt(0) - a] -= count;
    }
    counter[num] = count;
  }

  let result = '';
  for (let i = 0; i < 10; i++) {
    result += String(i).repeat(counter[i]);
  }
  return result;
};

var s = 'owoztneoer';
var expected = '012';
var result = originalDigits(s);
console.log(result, result === expected);

var s = 'fviefuro';
var expected = '45';
var result = originalDigits(s);
console.log(result, result === expected);

var s = 'oneoneonezerozerotwotwotwotwo';
var expected = '001112222';
var result = originalDigits(s);
console.log(result, result === expected);

var s = 'zeroonetwothreefourfivesixseveneightnine';
var expected = '0123456789';
var result = originalDigits(s);
console.log(result, result === expected);
