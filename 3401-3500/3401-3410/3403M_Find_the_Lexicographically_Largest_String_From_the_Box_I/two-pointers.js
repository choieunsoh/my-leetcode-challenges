// 3403. Find the Lexicographically Largest String From the Box I
// https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function (word, numFriends) {
  if (numFriends === 1) {
    return word;
  }

  const last = lastSubstring(word);
  const n = word.length;
  const m = last.length;
  return last.substring(0, Math.min(m, n - numFriends + 1));

  function lastSubstring(s) {
    let i = 0;
    let j = 1;
    const n = s.length;
    while (j < n) {
      let k = 0;
      while (j + k < n && s[i + k] === s[j + k]) {
        k++;
      }

      if (j + k < n && s[i + k] < s[j + k]) {
        const t = i;
        i = j;
        j = Math.max(j + 1, t + k + 1);
      } else {
        j = j + k + 1;
      }
    }
    return s.substring(i, n);
  }
};

var word = 'dbca',
  numFriends = 2;
var expected = 'dbc';
var result = answerString(word, numFriends);
console.log(result, result === expected);

var word = 'gggg',
  numFriends = 4;
var expected = 'g';
var result = answerString(word, numFriends);
console.log(result, result === expected);

var word = 'lnqlacpaqalbrdqattat',
  numFriends = 12;
var expected = 'ttat';
var result = answerString(word, numFriends);
console.log(result, result === expected);

var word = 'gdce',
  numFriends = 3;
var expected = 'gd';
var result = answerString(word, numFriends);
console.log(result, result === expected);
