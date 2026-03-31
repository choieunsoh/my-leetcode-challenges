// 3474. Lexicographically Smallest Generated String
// https://leetcode.com/problems/lexicographically-smallest-generated-string/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var generateString = function (str1, str2) {
  const n = str1.length;
  const m = str2.length;
  const s = new Array(n + m - 1).fill('a');
  const fixed = new Array(n + m - 1).fill(0);

  for (let i = 0; i < n; i++) {
    if (str1[i] === 'T') {
      for (let j = i; j < i + m; j++) {
        if (fixed[j] === 1 && s[j] !== str2[j - i]) {
          return '';
        } else {
          s[j] = str2[j - i];
          fixed[j] = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (str1[i] === 'F') {
      let flag = false;
      let idx = -1;
      for (let j = i + m - 1; j >= i; j--) {
        if (str2[j - i] !== s[j]) {
          flag = true;
        }
        if (idx === -1 && fixed[j] === 0) {
          idx = j;
        }
      }
      if (flag) {
        continue;
      } else if (idx !== -1) {
        s[idx] = 'b';
      } else {
        return '';
      }
    }
  }
  return s.join('');
};

var str1 = 'TFTF',
  str2 = 'ab';
var expected = 'ababa';
var result = generateString(str1, str2);
console.log(result, result === expected);

var str1 = 'TFTF',
  str2 = 'abc';
var expected = '';
var result = generateString(str1, str2);
console.log(result, result === expected);

var str1 = 'F',
  str2 = 'd';
var expected = 'a';
var result = generateString(str1, str2);
console.log(result, result === expected);
