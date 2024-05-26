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
  const memo = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => new Array(3).fill(-1)));
  return eligibleCount(0, 0, 0);

  function eligibleCount(days, totalAbsentCount, consecutiveLateCount) {
    if (totalAbsentCount >= 2 || consecutiveLateCount >= 3) {
      return 0;
    }

    if (days === n) {
      return 1;
    }

    if (memo[days][totalAbsentCount][consecutiveLateCount] !== -1) {
      return memo[days][totalAbsentCount][consecutiveLateCount];
    }

    let totalCount = 0;
    const presentCount = eligibleCount(days + 1, totalAbsentCount, 0) % MOD;
    totalCount = (totalCount + presentCount) % MOD;
    const absentCount = eligibleCount(days + 1, totalAbsentCount + 1, 0) % MOD;
    totalCount = (totalCount + absentCount) % MOD;
    const lateCount = eligibleCount(days + 1, totalAbsentCount, consecutiveLateCount + 1) % MOD;
    totalCount = (totalCount + lateCount) % MOD;

    memo[days][totalAbsentCount][consecutiveLateCount] = totalCount;
    return totalCount;
  }
};

var n = 2;
var expected = 8;
var result = checkRecord(n);
console.log(result, result === expected);

var n = 1;
var expected = 3;
var result = checkRecord(n);
console.log(result, result === expected);

// RangeError: Maximum call stack size exceeded
/*var n = 10101;
var expected = 183236316;
var result = checkRecord(n);
console.log(result, result === expected);
*/
