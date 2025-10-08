// 2744. Find Maximum Number of String Pairs
// https://leetcode.com/problems/find-maximum-number-of-string-pairs/
// T.C.: O(n*k)
// S.C.: O(n*k)
/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  let pairs = 0;
  const n = words.length;
  const seen = new Set();
  for (let i = n - 1; i >= 0; i--) {
    if (seen.has(words[i])) {
      pairs++;
      seen.delete(words[i]);
    } else {
      const reversedWord = reverse(words[i]);
      seen.add(reversedWord);
    }
  }
  return pairs;

  function reverse(str) {
    return str.split('').reverse().join('');
  }
};

var words = ['cd', 'ac', 'dc', 'ca', 'zz'];
var expected = 2;
var result = maximumNumberOfStringPairs(words);
console.log(result, result === expected);

var words = ['ab', 'ba', 'cc'];
var expected = 1;
var result = maximumNumberOfStringPairs(words);
console.log(result, result === expected);

var words = ['aa', 'ab'];
var expected = 0;
var result = maximumNumberOfStringPairs(words);
console.log(result, result === expected);
