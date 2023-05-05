// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (const ch of magazine) {
    const count = map.get(ch) ?? 0;
    map.set(ch, count + 1);
  }
  for (const ch of ransomNote) {
    if (!map.has(ch)) return false;
    const count = map.get(ch);
    if (count === 1) {
      map.delete(ch);
    } else {
      map.set(ch, count - 1);
    }
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
