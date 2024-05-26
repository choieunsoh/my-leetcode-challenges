// 552. Student Attendance Record II
// https://leetcode.com/problems/student-attendance-record-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
  const MOD = 1e9 + 7;
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => new Array(3).fill(0)));
  dp[0][0][0] = 1;

  for (let day = 1; day <= n; day++) {
    for (let totalAbsentCount = 0; totalAbsentCount <= 1; totalAbsentCount++) {
      for (let consecutiveLateCount = 0; consecutiveLateCount <= 2; consecutiveLateCount++) {
        const prevCount = dp[day - 1][totalAbsentCount][consecutiveLateCount];

        // P
        dp[day][totalAbsentCount][0] += prevCount;
        dp[day][totalAbsentCount][0] %= MOD;

        // A
        if (totalAbsentCount < 1) {
          dp[day][totalAbsentCount + 1][0] += prevCount;
          dp[day][totalAbsentCount + 1][0] %= MOD;
        }

        // L
        if (consecutiveLateCount < 2) {
          dp[day][totalAbsentCount][consecutiveLateCount + 1] += prevCount;
          dp[day][totalAbsentCount][consecutiveLateCount + 1] %= MOD;
        }
      }
    }
  }

  let result = 0;
  for (let totalAbsentCount = 0; totalAbsentCount <= 1; totalAbsentCount++) {
    for (let consecutiveLateCount = 0; consecutiveLateCount <= 2; consecutiveLateCount++) {
      result = (result + dp[n][totalAbsentCount][consecutiveLateCount]) % MOD;
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
