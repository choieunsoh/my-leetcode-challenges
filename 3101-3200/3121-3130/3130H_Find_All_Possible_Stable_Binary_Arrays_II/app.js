// 3130. Find All Possible Stable Binary Arrays II
// https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii/description/
// T.C.: O(n*m)
// S.C.: O(n*m)
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function (zero, one, limit) {
  const MOD = 1e9 + 7;
  const memo = Array.from({ length: zero + 1 }, () => Array.from({ length: one + 1 }, () => [-1, -1]));

  function dp(zero, one, lastBit) {
    if (zero === 0) {
      return lastBit === 0 || one > limit ? 0 : 1;
    } else if (one === 0) {
      return lastBit === 1 || zero > limit ? 0 : 1;
    }

    if (memo[zero][one][lastBit] === -1) {
      let res = 0;
      if (lastBit === 0) {
        res = (dp(zero - 1, one, 0) + dp(zero - 1, one, 1)) % MOD;
        if (zero > limit) {
          res = (res - dp(zero - limit - 1, one, 1) + MOD) % MOD;
        }
      } else {
        res = (dp(zero, one - 1, 0) + dp(zero, one - 1, 1)) % MOD;
        if (one > limit) {
          res = (res - dp(zero, one - limit - 1, 0) + MOD) % MOD;
        }
      }
      memo[zero][one][lastBit] = res % MOD;
    }
    return memo[zero][one][lastBit];
  }

  return (dp(zero, one, 0) + dp(zero, one, 1)) % MOD;
};

var zero = 1,
  one = 1,
  limit = 2;
var expected = 2;
var result = numberOfStableArrays(zero, one, limit);
console.log(result, result === expected);

var zero = 1,
  one = 2,
  limit = 1;
var expected = 1;
var result = numberOfStableArrays(zero, one, limit);
console.log(result, result === expected);

var zero = 3,
  one = 3,
  limit = 2;
var expected = 14;
var result = numberOfStableArrays(zero, one, limit);
console.log(result, result === expected);
