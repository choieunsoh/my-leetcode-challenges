// 3032. Count Numbers With Unique Digits II
// https://leetcode.com/problems/count-numbers-with-unique-digits-ii/description/
// T.C.: O(log b)
// S.C.: O(log b)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var numberCount = function (a, b) {
  // Function to count unique-digit numbers in [1, n]
  const solve = (nStr) => {
    const n = nStr.length;
    // memo[pos][mask]
    const memo = Array(n)
      .fill(0)
      .map(() => Array(1 << 10).fill(-1));

    // pos: current position from left (0-indexed)
    // mask: bitmask of used digits
    // isLimit: true if we are restricted by the digits of n
    // isNum: true if we have placed a non-zero digit
    const dfs = (pos, mask, isLimit, isNum) => {
      if (pos === n) {
        return isNum ? 1 : 0; // Return 1 if a valid number is formed
      }
      if (!isLimit && isNum && memo[pos][mask] !== -1) {
        return memo[pos][mask];
      }

      let ans = 0;

      // Case 1: Skip the current position (form a number with fewer digits)
      if (!isNum) {
        ans += dfs(pos + 1, mask, false, false);
      }

      // Case 2: Place a digit 'd' at the current position
      const up = isLimit ? parseInt(nStr[pos]) : 9;
      const startDigit = isNum ? 0 : 1; // Can't start a number with 0

      for (let d = startDigit; d <= up; d++) {
        // If digit 'd' has not been used yet
        if (!((mask >> d) & 1)) {
          ans += dfs(
            pos + 1,
            mask | (1 << d), // Mark digit 'd' as used
            isLimit && d === up, // New limit is true only if old limit was true and we picked the max possible digit
            true // We have now placed a digit
          );
        }
      }

      if (!isLimit && isNum) {
        memo[pos][mask] = ans;
      }
      return ans;
    };

    return dfs(0, 0, true, false);
  };

  // The result is count(b) - count(a - 1)
  return solve(String(b)) - solve(String(a - 1));
};

var a = 1,
  b = 20;
var expected = 19;
var result = numberCount(a, b);
console.log(result, result === expected);

var a = 9,
  b = 19;
var expected = 10;
var result = numberCount(a, b);
console.log(result, result === expected);

var a = 80,
  b = 120;
var expected = 27;
var result = numberCount(a, b);
console.log(result, result === expected);
