// 3713. Longest Balanced Substring I
// https://leetcode.com/problems/longest-balanced-substring-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
  const n = s.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const counts = new Array(26).fill(0);
    for (let j = i; j < n; j++) {
      let flag = true;
      const c = s.charCodeAt(j) - 97;
      counts[c]++;
      for (const x of counts) {
        if (x > 0 && x !== counts[c]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        result = Math.max(result, j - i + 1);
      }
    }
  }
  return result;
};

var s = 'abbac';
var expected = 4;
var result = longestBalanced(s);
console.log(result, result === expected);

var s = 'zzabccy';
var expected = 4;
var result = longestBalanced(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 2;
var result = longestBalanced(s);
console.log(result, result === expected);
