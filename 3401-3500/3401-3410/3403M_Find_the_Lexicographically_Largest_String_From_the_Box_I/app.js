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
  if (numFriends === 1) return word;
  const maxLength = word.length - numFriends + 1;
  let maxStr = '';
  for (let i = 0; i < word.length; i++) {
    const str = word.substring(i, i + maxLength);
    if (str > maxStr) maxStr = str;
  }
  return maxStr;
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
