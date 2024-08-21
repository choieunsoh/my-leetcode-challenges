// 664. Strange Printer
// https://leetcode.com/problems/strange-printer/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  s = removeDuplicates(s);
  const n = s.length;
  const memo = Array.from({ length: n }, () => new Array(n));
  return minimumTurns(0, n - 1);

  function minimumTurns(start, end) {
    if (start > end) {
      return 0;
    }

    if (memo[start][end] !== undefined) {
      return memo[start][end];
    }

    let minTurns = 1 + minimumTurns(start + 1, end);
    for (let k = start + 1; k <= end; k++) {
      if (s.charAt(start) !== s.charAt(k)) continue;

      const turnsWithMatch = minimumTurns(start, k - 1) + minimumTurns(k + 1, end);
      minTurns = Math.min(minTurns, turnsWithMatch);
    }
    return (memo[start][end] = minTurns);
  }

  function removeDuplicates(s) {
    let result = '';
    let i = 0;
    while (i < s.length) {
      const currentChar = s.charAt(i);
      result += currentChar;
      while (i < s.length && s.charAt(i) === currentChar) {
        i++;
      }
    }
    return result;
  }
};

var s = 'aaabbb';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);

var s = 'aba';
var expected = 2;
var result = strangePrinter(s);
console.log(result, result === expected);
