// 3753. Total Waviness of Numbers in Range II
// https://leetcode.com/problems/total-waviness-of-numbers-in-range-ii/description/
// T.C.: O(D^3 log num2)
// S.C.: O(D^2)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
  return Number(solve(num2) - solve(num1 - 1));

  function solve(n) {
    if (n <= 0) return 0n;
    const digits = String(BigInt(n)).split('').map(Number);
    const len = digits.length;
    const memo = new Map();

    const dp = (pos, tight, started, last, secondLast) => {
      if (pos === len) return started ? [1n, 0n] : [0n, 0n];

      let key = -1;
      if (!tight) {
        key = pos * 242 + (started ? 121 : 0) + (last + 1) * 11 + (secondLast + 1);
        if (memo.has(key)) return memo.get(key);
      }

      const limit = tight ? digits[pos] : 9;
      let totalCnt = 0n,
        totalWave = 0n;

      for (let d = 0; d <= limit; d++) {
        const nt = tight && d === limit;
        const ns = started || d > 0;
        let nl,
          ns2,
          gain = 0n;

        if (!ns) {
          nl = -1;
          ns2 = -1;
        } else if (!started) {
          nl = d;
          ns2 = -1;
        } else {
          nl = d;
          ns2 = last;
          if (secondLast >= 0 && ((last > secondLast && last > d) || (last < secondLast && last < d))) {
            gain = 1n;
          }
        }

        const [cnt, wave] = dp(pos + 1, nt, ns, nl, ns2);
        totalCnt += cnt;
        totalWave += wave + gain * cnt;
      }

      const res = [totalCnt, totalWave];
      if (!tight) memo.set(key, res);
      return res;
    };

    return dp(0, true, false, -1, -1)[1];
  }
};

var num1 = 120,
  num2 = 130;
var expected = 3;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);

var num1 = 198,
  num2 = 202;
var expected = 3;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);

var num1 = 4848,
  num2 = 4848;
var expected = 2;
var result = totalWaviness(num1, num2);
console.log(result, result === expected);
