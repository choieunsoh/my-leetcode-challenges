// 422. Valid Word Square
// https://leetcode.com/problems/valid-word-square/description/
// T.C.: O(m * n)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @return {boolean}
 */
var validWordSquare = function (words) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j >= words.length || i >= words[j].length) return false;
      if (words[i][j] !== words[j][i]) return false;
    }
  }
  return true;
};

var words = ['abcd', 'bnrt', 'crmy', 'dtye'];
var expected = true;
var result = validWordSquare(words);
console.log(result, result === expected);

var words = ['abcd', 'bnrt', 'crm', 'dt'];
var expected = true;
var result = validWordSquare(words);
console.log(result, result === expected);

var words = ['ball', 'area', 'read', 'lady'];
var expected = false;
var result = validWordSquare(words);
console.log(result, result === expected);

var words = ['abc', 'bde', 'cefg'];
var expected = false;
var result = validWordSquare(words);
console.log(result, result === expected);
