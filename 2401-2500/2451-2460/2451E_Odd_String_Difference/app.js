// 2451. Odd String Difference
// https://leetcode.com/problems/odd-string-difference/
// T.C.: O(m*n)
// S.C.: O(m)
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const n = words.length;
  const diff0 = getDiff(words[0]);
  const diff1 = getDiff(words[1]);
  const diff2 = getDiff(words[2]);

  if (diff0 === diff1 && diff1 === diff2) {
    for (let i = 3; i < n; i++) {
      const diffN = getDiff(words[i]);
      if (diffN !== diff0) {
        return words[i];
      }
    }
  }

  if (diff0 === diff1) return words[2];
  if (diff0 === diff2) return words[1];
  return words[0];

  function getDiff(word) {
    const diffArr = [];
    for (let i = 1; i < n; i++) {
      const diffNum = word.charCodeAt(i) - word.charCodeAt(i - 1);
      diffArr.push(diffNum);
    }
    return diffArr.join(',');
  }
};

var words = ['adc', 'wzy', 'abc'];
var expected = 'abc';
var result = oddString(words);
console.log(result, result === expected);

var words = ['aaa', 'bob', 'ccc', 'ddd'];
var expected = 'bob';
var result = oddString(words);
console.log(result, result === expected);

var words = ['ddd', 'poo', 'baa', 'onn'];
var expected = 'ddd';
var result = oddString(words);
console.log(result, result === expected);
