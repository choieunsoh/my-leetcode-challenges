// 758. Bold Words in String
// https://leetcode.com/problems/bold-words-in-string/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function (words, s) {
  const n = s.length;
  const bold = new Array(n).fill(false);
  for (const w of words) {
    let idx = s.indexOf(w, 0);
    while (idx !== -1) {
      for (let i = idx; i < idx + w.length; i++) {
        bold[i] = true;
      }
      idx = s.indexOf(w, idx + 1);
    }
  }
  let result = '';
  for (let i = 0; i < n; ) {
    if (bold[i]) {
      let j = i;
      while (j < n && bold[j]) j++;
      result += '<b>' + s.slice(i, j) + '</b>';
      i = j;
    } else result += s[i++];
  }
  return result;
};

var words = ['ab', 'bc'],
  s = 'aabcd';
var expected = 'a<b>abc</b>d';
var result = boldWords(words, s);
console.log(result, result === expected);

var words2 = ['ab', 'cb'],
  s2 = 'aabcd';
var expected2 = 'a<b>ab</b>cd';
var result2 = boldWords(words2, s2);
console.log(result2, result2 === expected2);
