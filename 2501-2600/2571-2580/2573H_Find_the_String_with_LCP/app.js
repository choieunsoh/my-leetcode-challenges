// 2573. Find the String with LCP
// https://leetcode.com/problems/find-the-string-with-lcp/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function (lcp) {
  const n = lcp.length;
  const word = new Array(n).fill('');
  let current = 'a'.charCodeAt(0);

  // construct the string starting from 'a' to 'z' sequentially
  for (let i = 0; i < n; i++) {
    if (!word[i]) {
      if (current > 'z'.charCodeAt(0)) {
        return '';
      }
      word[i] = String.fromCharCode(current);
      for (let j = i + 1; j < n; j++) {
        if (lcp[i][j] > 0) {
          word[j] = word[i];
        }
      }
      current++;
    }
  }

  // verify if the constructed string meets the LCP matrix requirements
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (word[i] !== word[j]) {
        if (lcp[i][j] !== 0) {
          return '';
        }
      } else {
        if (i === n - 1 || j === n - 1) {
          if (lcp[i][j] !== 1) {
            return '';
          }
        } else {
          if (lcp[i][j] !== lcp[i + 1][j + 1] + 1) {
            return '';
          }
        }
      }
    }
  }

  return word.join('');
};

var lcp = [
  [4, 0, 2, 0],
  [0, 3, 0, 1],
  [2, 0, 2, 0],
  [0, 1, 0, 1],
];
var expected = 'abab';
var result = findTheString(lcp);
console.log(result, result === expected);

var lcp = [
  [4, 3, 2, 1],
  [3, 3, 2, 1],
  [2, 2, 2, 1],
  [1, 1, 1, 1],
];
var expected = 'aaaa';
var result = findTheString(lcp);
console.log(result, result === expected);

var lcp = [
  [4, 3, 2, 1],
  [3, 3, 2, 1],
  [2, 2, 2, 1],
  [1, 1, 1, 3],
];
var expected = '';
var result = findTheString(lcp);
console.log(result, result === expected);
