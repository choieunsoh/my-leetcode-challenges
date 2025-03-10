// 3306. Count of Substrings Containing Every Vowel and K Consonants II
// https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const n = word.length;
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  let consonants = 0;

  const nextConsonant = new Array(n);
  let nextConsonantIndex = n;
  for (let i = n - 1; i >= 0; i--) {
    nextConsonant[i] = nextConsonantIndex;
    if (!isVowel(word[i])) {
      nextConsonantIndex = i;
    }
  }

  let count = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    const char = word[right];
    if (isVowel(char)) {
      vowels[char]++;
    } else {
      consonants++;
    }

    while (consonants > k && isValidVowels()) {
      moveLeftPointer();
    }

    while (consonants === k && isValidVowels()) {
      count += nextConsonant[right] - right;
      moveLeftPointer();
    }

    right++;
  }

  return count;

  function moveLeftPointer() {
    const leftChar = word[left];
    if (isVowel(leftChar)) {
      vowels[leftChar]--;
    } else {
      consonants--;
    }
    left++;
  }

  function isVowel(char) {
    return char in vowels;
  }

  function isValidVowels() {
    return Object.values(vowels).every((count) => count > 0);
  }
};

var word = 'aeioqq',
  k = 1;
var expected = 0;
var result = countOfSubstrings(word, k);
console.log(result, result === expected);

var word = 'aeiou',
  k = 0;
var expected = 1;
var result = countOfSubstrings(word, k);
console.log(result, result === expected);

var word = 'ieaouqqieaouqq',
  k = 1;
var expected = 3;
var result = countOfSubstrings(word, k);
console.log(result, result === expected);

var word = 'iqeaouqi',
  k = 2;
var expected = 3;
var result = countOfSubstrings(word, k);
console.log(result, result === expected);
