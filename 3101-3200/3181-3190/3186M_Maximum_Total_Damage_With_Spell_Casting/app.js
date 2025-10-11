// 3186. Maximum Total Damage With Spell Casting
// https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
  const freq = new Map();
  for (const x of power) {
    freq.set(x, (freq.get(x) ?? 0) + 1);
  }

  const vals = Array.from(freq.keys()).sort((a, b) => a - b);
  const m = vals.length;
  const w = new Array(m);
  for (let i = 0; i < m; i++) {
    w[i] = vals[i] * freq.get(vals[i]);
  }

  const dp = new Array(m).fill(0);
  let j = -1;
  for (let i = 0; i < m; i++) {
    while (j + 1 < i && vals[j + 1] <= vals[i] - 3) {
      j++;
    }

    const take = w[i] + (j >= 0 ? dp[j] : 0);
    const skip = i > 0 ? dp[i - 1] : 0;

    dp[i] = Math.max(skip, take);
  }
  return dp[m - 1];
};

var power = [1, 1, 3, 4];
var expected = 6;
var result = maximumTotalDamage(power);
console.log(result, result === expected);

var power = [7, 1, 6, 6];
var expected = 13;
var result = maximumTotalDamage(power);
console.log(result, result === expected);
