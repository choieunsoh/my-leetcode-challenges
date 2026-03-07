// 1888. Minimum Number of Flips to Make the Binary String Alternating
// https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  // Characteristic function
  const I = (ch, x) => (parseInt(ch) === x ? 1 : 0);

  const n = s.length;
  const prefix = new Array(n);
  for (let i = 0; i < n; i++) {
    prefix[i] = new Array(2);
  }

  // Note the boundary case when i=0
  for (let i = 0; i < n; ++i) {
    if (i === 0) {
      prefix[i][0] = I(s[i], 1);
      prefix[i][1] = I(s[i], 0);
    } else {
      prefix[i][0] = prefix[i - 1][1] + I(s[i], 1);
      prefix[i][1] = prefix[i - 1][0] + I(s[i], 0);
    }
  }

  let result = Math.min(prefix[n - 1][0], prefix[n - 1][1]);
  if (n % 2 === 1) {
    // If n is an odd number, it is also necessary to calculate suf
    const suffix = new Array(n);
    for (let i = 0; i < n; i++) {
      suffix[i] = new Array(2);
    }

    // Note the boundary case when i = n - 1
    for (let i = n - 1; i >= 0; --i) {
      if (i === n - 1) {
        suffix[i][0] = I(s[i], 1);
        suffix[i][1] = I(s[i], 0);
      } else {
        suffix[i][0] = suffix[i + 1][1] + I(s[i], 1);
        suffix[i][1] = suffix[i + 1][0] + I(s[i], 0);
      }
    }

    for (let i = 0; i + 1 < n; ++i) {
      result = Math.min(result, prefix[i][0] + suffix[i + 1][0]);
      result = Math.min(result, prefix[i][1] + suffix[i + 1][1]);
    }
  }

  return result;
};

var s = '111000';
var expected = 2;
var result = minFlips(s);
console.log(result, result === expected);

var s = '010';
var expected = 0;
var result = minFlips(s);
console.log(result, result === expected);

var s = '1110';
var expected = 1;
var result = minFlips(s);
console.log(result, result === expected);
