// 2451. Odd String Difference
// https://leetcode.com/problems/odd-string-difference/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  let result = '';
  const diffMap = new Map();
  const wordMap = new Map();
  const n = words[0].length;
  for (const word of words) {
    const diffArr = [];
    for (let i = 1; i < n; i++) {
      const diffNum = word.charCodeAt(i) - word.charCodeAt(i - 1);
      diffArr.push(diffNum);
    }

    const diff = diffArr.join(',');
    diffMap.set(diff, (diffMap.get(diff) ?? 0) + 1);
    wordMap.set(diff, word);
  }
  for (const [diff, count] of diffMap) {
    if (count === 1) {
      result = wordMap.get(diff);
      break;
    }
  }
  return result;
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
