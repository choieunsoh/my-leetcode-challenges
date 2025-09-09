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
  const knows = new Array(n).fill(0);
  knows[0] = 1;
  let shared = 0;
  let total = 1;

  for (let day = delay; day < forget; day++) {
    shared = (shared + knows[day - delay]) % MOD;
    total = (total + shared) % MOD;
    knows[day] = shared;
  }

  for (let day = forget; day < n; day++) {
    shared = (shared + knows[day - delay] - knows[day - forget] + MOD) % MOD;
    total = (total + shared - knows[day - forget] + MOD) % MOD;
    knows[day] = shared;
  }

  return total % MOD;
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
