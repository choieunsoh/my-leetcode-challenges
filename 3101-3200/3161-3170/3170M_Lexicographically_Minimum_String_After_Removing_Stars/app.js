// 3170. Lexicographically Minimum String After Removing Stars
// https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function (s) {
  const result = [...s];
  const n = s.length;
  const chars = Array.from({ length: 26 }, () => []);
  const a = 'a'.charCodeAt(0);

  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (ch === '*') {
      result[i] = '';
      for (let j = 0; j < 26; j++) {
        if (chars[j].length) {
          const idx = chars[j].pop();
          result[idx] = '';
          break;
        }
      }
    } else {
      chars[ch.charCodeAt(0) - a].push(i);
    }
  }

  return result.join('');
};

var s = 'aaba*';
var expected = 'aab';
var result = clearStars(s);
console.log(result, result === expected);

var s = 'abc';
var expected = 'abc';
var result = clearStars(s);
console.log(result, result === expected);

var s = 'azab**ax*bxbx*';
var expected = 'zbxbxx';
var result = clearStars(s);
console.log(result, result === expected);
