// 3448. Count Substrings Divisible By Last Digit
// https://leetcode.com/problems/count-substrings-divisible-by-last-digit/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  const n = s.length;

  const P3 = new Array(n);
  const P7 = new Array(n);
  const P9 = new Array(n);
  P3[0] = (s.charCodeAt(0) - 48) % 3;
  P7[0] = (s.charCodeAt(0) - 48) % 7;
  P9[0] = (s.charCodeAt(0) - 48) % 9;

  for (let i = 1; i < n; i++) {
    const d = s.charCodeAt(i) - 48;
    P3[i] = (P3[i - 1] * 10 + d) % 3;
    P7[i] = (P7[i - 1] * 10 + d) % 7;
    P9[i] = (P9[i - 1] * 10 + d) % 9;
  }

  const freq3 = new Array(3).fill(0);
  const freq9 = new Array(9).fill(0);
  const freq7 = Array.from({ length: 6 }, () => new Array(7).fill(0));
  const inv7 = [1, 5, 4, 6, 2, 3];

  for (let j = 0; j < n; j++) {
    const d = s.charCodeAt(j) - 48;
    if (d === 0) {
      // Skip 0 as last digit
    } else if (d === 1 || d === 2 || d === 5) {
      count += j + 1;
    } else if (d === 4) {
      if (j === 0) {
        count += 1;
      } else {
        const num = (s.charCodeAt(j - 1) - 48) * 10 + d;
        count += num % 4 === 0 ? j + 1 : 1;
      }
    } else if (d === 8) {
      if (j === 0) {
        count += 1;
      } else if (j === 1) {
        const num = (s.charCodeAt(0) - 48) * 10 + 8;
        count += num % 8 === 0 ? 2 : 1;
      } else {
        const num3 = (s.charCodeAt(j - 2) - 48) * 100 + (s.charCodeAt(j - 1) - 48) * 10 + 8;
        const num2 = (s.charCodeAt(j - 1) - 48) * 10 + 8;
        count += (num3 % 8 === 0 ? j - 1 : 0) + (num2 % 8 === 0 ? 1 : 0) + 1;
      }
    } else if (d === 3 || d === 6) {
      count += (P3[j] === 0 ? 1 : 0) + freq3[P3[j]];
    } else if (d === 7) {
      count += P7[j] === 0 ? 1 : 0;
      for (let m = 0; m < 6; m++) {
        const idx = ((j % 6) - m + 6) % 6;
        const req = (P7[j] * inv7[m]) % 7;
        count += freq7[idx][req];
      }
    } else if (d === 9) {
      count += (P9[j] === 0 ? 1 : 0) + freq9[P9[j]];
    }
    freq3[P3[j]]++;
    freq7[j % 6][P7[j]]++;
    freq9[P9[j]]++;
  }
  return count;
};

var s = '12936';
var expected = 11;
var result = countSubstrings(s);
console.log(result, result === expected);

var s = '5701283';
var expected = 18;
var result = countSubstrings(s);
console.log(result, result === expected);

var s = '1010101010';
var expected = 25;
var result = countSubstrings(s);
console.log(result, result === expected);
