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
  let P = 1;
  let L = 1;
  let LL = 0;
  let AP = 1;
  let AL = 0;
  let ALL = 0;

  for (let i = 1; i < n; i++) {
    const prevP = P;
    const prevL = L;
    const prevLL = LL;
    const prevAP = AP;
    const prevAL = AL;
    const prevALL = ALL;

    P = (((prevP + prevL) % MOD) + prevLL) % MOD;
    L = prevP;
    LL = prevL;

    AP = P + ((((prevAP + prevAL) % MOD) + prevALL) % MOD);
    AL = prevAP;
    ALL = prevAL;
  }

  return (((P + L) % MOD) + ((LL + AP) % MOD) + AL + ALL) % MOD;
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
