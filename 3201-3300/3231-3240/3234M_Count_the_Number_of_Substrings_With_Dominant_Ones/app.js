// 3234. Count the Number of Substrings With Dominant Ones
// https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/description/
// T.C.: O(n * sqrt(n))
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const n = s.length;
  const pre = new Array(n + 1);
  pre[0] = -1;
  for (let i = 0; i < n; i++) {
    if (i === 0 || (i > 0 && s[i - 1] === '0')) {
      pre[i + 1] = i;
    } else {
      pre[i + 1] = pre[i];
    }
  }
  console.log(pre);

  let result = 0;
  for (let i = 1; i <= n; i++) {
    let zeroCount = s[i - 1] === '0' ? 1 : 0;
    let j = i;
    while (j > 0 && zeroCount * zeroCount <= n) {
      const oneCount = i - pre[j] - zeroCount;
      if (zeroCount * zeroCount <= oneCount) {
        result += Math.min(j - pre[j], oneCount - zeroCount * zeroCount + 1);
      }
      j = pre[j];
      zeroCount++;
    }
  }
  return result;
};

var s = '00011';
var expected = 5;
var result = numberOfSubstrings(s);
console.log(result, result === expected);

var s = '101101';
var expected = 16;
var result = numberOfSubstrings(s);
console.log(result, result === expected);
