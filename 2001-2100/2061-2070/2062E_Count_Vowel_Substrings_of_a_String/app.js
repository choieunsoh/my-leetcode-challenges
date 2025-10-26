// 2062. Count Vowel Substrings of a String
// https://leetcode.com/problems/count-vowel-substrings-of-a-string/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
  let count = 0;
  let vowelCount = 0;
  let left = 0;
  let right = 0;
  const map = new Map([
    ['a', 0],
    ['e', 0],
    ['i', 0],
    ['o', 0],
    ['u', 0],
  ]);
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
      if (map.get(ch) === 1) {
        vowelCount++;
      }
      while (vowelCount === 5) {
        map.set(word[right], map.get(word[right]) - 1);
        if (map.get(word[right]) === 0) {
          vowelCount--;
        }
        right++;
      }
      count += right - left;
    } else {
      map.set('a', 0);
      map.set('e', 0);
      map.set('i', 0);
      map.set('o', 0);
      map.set('u', 0);
      vowelCount = 0;
      left = i + 1;
      right = i + 1;
    }
  }
  return count;
};

var word = 'aeiouu';
var expected = 2;
var result = countVowelSubstrings(word);
console.log(result, result === expected);

var word = 'unicornarihan';
var expected = 0;
var result = countVowelSubstrings(word);
console.log(result, result === expected);

var word = 'cuaieuouac';
var expected = 7;
var result = countVowelSubstrings(word);
console.log(result, result === expected);
