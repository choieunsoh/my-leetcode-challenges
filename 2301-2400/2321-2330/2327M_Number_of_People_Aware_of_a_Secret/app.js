// 2327. Number of People Aware of a Secret
// https://leetcode.com/problems/number-of-people-aware-of-a-secret/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1e9 + 7;
  const know = [{ day: 1, count: 1 }];
  const share = [];
  let knowCount = 1;
  let shareCount = 0;

  for (let day = 2; day <= n; day++) {
    if (know.length > 0 && know[0].day === day - delay) {
      const first = know.shift();
      knowCount = (knowCount - first.count + MOD) % MOD;
      shareCount = (shareCount + first.count) % MOD;
      share.push(first);
    }
    if (share.length > 0 && share[0].day === day - forget) {
      const first = share.shift();
      shareCount = (shareCount - first.count + MOD) % MOD;
    }
    if (share.length) {
      knowCount = (knowCount + shareCount) % MOD;
      know.push({ day, count: shareCount });
    }
  }
  return (knowCount + shareCount) % MOD;
};

var n = 6,
  delay = 2,
  forget = 4;
var expected = 5;
var result = peopleAwareOfSecret(n, delay, forget);
console.log(result, result === expected);

var n = 4,
  delay = 1,
  forget = 3;
var expected = 6;
var result = peopleAwareOfSecret(n, delay, forget);
console.log(result, result === expected);

var n = 684,
  delay = 18,
  forget = 496;
var expected = 653668527;
var result = peopleAwareOfSecret(n, delay, forget);
console.log(result, result === expected);
