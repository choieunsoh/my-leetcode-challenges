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
  const L = n + m - 1;
  const res = new Uint8Array(L);
  const used = new Uint8Array(L);
  for (let i = 0; i < n; i++) {
    if (str1[i] === 'T') {
      for (let j = 0; j < m; j++) {
        const c = str2.charCodeAt(j);
        if (used[i + j] && res[i + j] !== c) return '';
        res[i + j] = c;
        used[i + j] = 1;
      }
    }
  }

  for (let i = 0; i < L; i++) {
    if (!used[i]) res[i] = 97;
  }

  let i = 0;
  while (i < L) {
    const k = i - m + 1;
    let flag = false;
    if (k >= 0 && k < n && str1[k] === 'F') {
      flag = true;
      for (let j = 0; j < m; j++) {
        if (res[k + j] !== str2.charCodeAt(j)) {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      let j = i;
      while (j >= 0) {
        if (!used[j]) {
          res[j]++;
          if (res[j] <= 122) break;
          res[j] = 97;
        }
        j--;
      }
      if (j < 0) return '';
      i = j;
    } else {
      i++;
    }
  }

  let result = ``;
  for (let x = 0; x < L; x++) {
    result += String.fromCharCode(res[x]);
  }
  return result;
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
