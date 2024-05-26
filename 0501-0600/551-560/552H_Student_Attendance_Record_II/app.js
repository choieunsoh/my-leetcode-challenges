// 552. Student Attendance Record II
// https://leetcode.com/problems/student-attendance-record-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  const MOD = 1e9 + 7;
  let dp = Array.from({ length: 2 }, () => new Array(3).fill(0));
  dp[0][0] = 1;

  for (let day = 1; day <= n; day++) {
    const dpNext = Array.from({ length: 2 }, () => new Array(3).fill(0));
    for (let totalAbsentCount = 0; totalAbsentCount <= 1; totalAbsentCount++) {
      for (let consecutiveLateCount = 0; consecutiveLateCount <= 2; consecutiveLateCount++) {
        const prevCount = dp[totalAbsentCount][consecutiveLateCount];

        // P
        dpNext[totalAbsentCount][0] += prevCount;
        dpNext[totalAbsentCount][0] %= MOD;

        // A
        if (totalAbsentCount < 1) {
          dpNext[totalAbsentCount + 1][0] += prevCount;
          dpNext[totalAbsentCount + 1][0] %= MOD;
        }

        // L
        if (consecutiveLateCount < 2) {
          dpNext[totalAbsentCount][consecutiveLateCount + 1] += prevCount;
          dpNext[totalAbsentCount][consecutiveLateCount + 1] %= MOD;
        }
      }
    }

    dp = dpNext;
  }

  let result = 0;
  for (let totalAbsentCount = 0; totalAbsentCount <= 1; totalAbsentCount++) {
    for (let consecutiveLateCount = 0; consecutiveLateCount <= 2; consecutiveLateCount++) {
      result = (result + dp[totalAbsentCount][consecutiveLateCount]) % MOD;
    }
  }
  return result;
};

var n = 2;
var expected = 8;
var result = checkRecord(n);
console.log(result, result === expected);

var n = 1;
var expected = 3;
var result = checkRecord(n);
console.log(result, result === expected);

var n = 10101;
var expected = 183236316;
var result = checkRecord(n);
console.log(result, result === expected);
