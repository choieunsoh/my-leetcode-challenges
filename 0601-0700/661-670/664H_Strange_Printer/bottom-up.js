// 664. Strange Printer
// https://leetcode.com/problems/strange-printer/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {
  // Preprocess the string to remove consecutive duplicate characters
  s = removeDuplicates(s);
  const n = s.length;

  // dp[i][j] represents the minimum number of turns to print s[i] to s[j]
  const minTurns = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    minTurns[i][i] = 1;
  }

  // Fill the dp table
  for (let length = 2; length <= n; length++) {
    for (let start = 0; start + length - 1 < n; start++) {
      const end = start + length - 1;

      // Initialize with worst case: print each character separately
      minTurns[start][end] = length;

      // Try all possible splits and find the minimum
      for (let split = 0; split < length - 1; split++) {
        let totalTurns = minTurns[start][start + split] + minTurns[start + split + 1][end];

        // If the characters at the split and end match, we can save one turn
        if (s.charAt(start + split) === s.charAt(end)) {
          totalTurns--;
        }

        minTurns[start][end] = Math.min(minTurns[start][end], totalTurns);
      }
    }
  }

  // Return the minimum turns needed to print the entire string
  return minTurns[0][n - 1];

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
