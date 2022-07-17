// https://leetcode.com/problems/ransom-note/
// 383. Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = {};
  for (const char of magazine) {
    map[char] = (map[char] ?? 0) + 1;
  }

  for (const char of ransomNote) {
    if (!map[char]) return false;
    map[char]--;
  }

  return true;
};

var ransomNote = 'a',
  magazine = 'b';
var expected = false;
console.log(canConstruct(ransomNote, magazine), expected);

var ransomNote = 'aa',
  magazine = 'ab';
var expected = false;
console.log(canConstruct(ransomNote, magazine), expected);

var ransomNote = 'aa',
  magazine = 'aab';
var expected = true;
console.log(canConstruct(ransomNote, magazine), expected);

var ransomNote = 'aab',
  magazine = 'baa';
var expected = true;
console.log(canConstruct(ransomNote, magazine), expected);
