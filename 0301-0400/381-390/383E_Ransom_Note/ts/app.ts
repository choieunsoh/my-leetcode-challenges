// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/
var canConstruct = function (ransomNote: string, magazine: string): boolean {
  const a = 'a'.charCodeAt(0);
  const counting = Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    const ch = magazine.charCodeAt(i) - a;
    counting[ch]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote.charCodeAt(i) - a;
    const count = counting[ch]--;
    if (count === 0) return false;
  }
  return true;
};

var ransomNote = 'a',
  magazine = 'b';
var expected = false;
var result = canConstruct(ransomNote, magazine);
console.log(result, result === expected);

var ransomNote = 'aa',
  magazine = 'ab';
var expected = false;
var result = canConstruct(ransomNote, magazine);
console.log(result, result === expected);

var ransomNote = 'aa',
  magazine = 'aab';
var expected = true;
var result = canConstruct(ransomNote, magazine);
console.log(result, result === expected);

var ransomNote = 'aab',
  magazine = 'baa';
var expected = true;
var result = canConstruct(ransomNote, magazine);
console.log(result, result === expected);
