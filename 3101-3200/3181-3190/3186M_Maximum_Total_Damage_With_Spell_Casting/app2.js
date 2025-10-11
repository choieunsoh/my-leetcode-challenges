// 3186. Maximum Total Damage With Spell Casting
// https://leetcode.com/problems/maximum-total-damage-with-spell-casting/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
  const counts = new Map();
  for (const p of power) {
    counts.set(p, (counts.get(p) ?? 0) + 1);
  }

  const vec = [[Number.MIN_SAFE_INTEGER, 0]];
  const keys = Array.from(counts.keys()).sort((a, b) => a - b);
  for (const key of keys) {
    vec.push([key, counts.get(key)]);
  }

  const n = vec.length;
  const dp = new Array(n).fill(0);
  let maxDamage = 0;
  let totalDamage = 0;
  let j = 1;
  for (let i = 1; i < n; i++) {
    const [damage, count] = vec[i];
    while (j < i && vec[j][0] < damage - 2) {
      maxDamage = Math.max(maxDamage, dp[j]);
      j++;
    }
    dp[i] = maxDamage + damage * count;
    totalDamage = Math.max(totalDamage, dp[i]);
  }
  return totalDamage;
};

var power = [1, 1, 3, 4];
var expected = 6;
var result = maximumTotalDamage(power);
console.log(result, result === expected);

var power = [7, 1, 6, 6];
var expected = 13;
var result = maximumTotalDamage(power);
console.log(result, result === expected);
