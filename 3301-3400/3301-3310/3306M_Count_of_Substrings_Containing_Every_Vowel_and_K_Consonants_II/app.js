// 3306. Count of Substrings Containing Every Vowel and K Consonants II
// https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  return atMostK(word, k) - atMostK(word, k - 1);

  function atMostK(word, k) {
    const n = word.length;
    let [a, e, i, o, u] = [0, 0, 0, 0, 0];
    let consonants = 0;

    let count = 0;
    let left = 0;
    let right = 0;
    while (right < n) {
      updateCount(word[right++], true);

      while (consonants > k && a && e && i && o && u) {
        updateCount(word[left++], false);
      }

      count += right - left;
    }

    return count;

    function updateCount(char, increase) {
      let offset = increase ? 1 : -1;
      switch (char) {
        case 'a':
          a += offset;
          break;
        case 'e':
          e += offset;
          break;
        case 'i':
          i += offset;
          break;
        case 'o':
          o += offset;
          break;
        case 'u':
          u += offset;
          break;
        default:
          consonants += offset;
          break;
      }
    }
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
