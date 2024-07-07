// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function findSubstring(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxVowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      maxVowelCount++;
    }
  }

  let start = 0;
  let vowelCount = 0;
  for (let end = k; end < s.length; end++) {
    if (vowels.has(s[end - k])) {
      vowelCount--;
    }
    if (vowels.has(s[end])) {
      vowelCount++;
    }
    if (vowelCount > maxVowelCount) {
      maxVowelCount = vowelCount;
      start = end - k + 1;
    }
  }

  return maxVowelCount === 0 ? 'Not found!' : s.substring(start, start + k);
}

var s = 'caberqiitefg',
  k = 5;
var expected = 'erqii';
var result = findSubstring(s, k);
console.log(result, result === expected);

var s = 'aeiouia',
  k = 3;
var expected = 'aei';
var result = findSubstring(s, k);
console.log(result, result === expected);

var s = 'azerdii',
  k = 5;
var expected = 'erdii';
var result = findSubstring(s, k);
console.log(result, result === expected);

var s = 'qwdftr',
  k = 2;
var expected = 'Not found!';
var result = findSubstring(s, k);
console.log(result, result === expected);
