// https://leetcode.com/problems/word-pattern/
// 290. Word Pattern
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern: string, s: string): boolean {
  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  const mapPattern = new Map<string, string>();
  const setWord = new Set<string>();
  for (let i = 0; i < pattern.length; i++) {
    if (!mapPattern.has(pattern[i])) {
      mapPattern.set(pattern[i], words[i]);
      if (setWord.has(words[i])) return false;
      setWord.add(words[i]);
    } else {
      if (mapPattern.get(pattern[i]) !== words[i]) return false;
    }
  }
  return true;
};

var pattern = 'abba',
  s = 'dog cat cat dog';
var expected = true;
var result = wordPattern(pattern, s);
console.log(result, result === expected);

var pattern = 'abba',
  s = 'dog cat cat fish';
var expected = false;
var result = wordPattern(pattern, s);
console.log(result, result === expected);

var pattern = 'aaaa',
  s = 'dog cat cat dog';
var expected = false;
var result = wordPattern(pattern, s);
console.log(result, result === expected);

var pattern = 'abba',
  s = 'dog dog dog dog';
var expected = false;
var result = wordPattern(pattern, s);
console.log(result, result === expected);
