// 2550. Count Collisions of Monkeys on a Polygon
// https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/
/**
 * @param {number} n
 * @return {number}
 */
var monkeyMove = function (n) {
  const MOD = BigInt(10 ** 9 + 7);
  let result = 1n;
  let base = 2n;
  while (n) {
    if (n & 1) {
      result = (result * base) % MOD;
    }
    base = (base * base) % MOD;
    n >>= 1;
  }

  return Number((result + MOD - 2n) % MOD);
};

var n = 3;
var expected = 6;
var result = monkeyMove(n);
console.log(result, result === expected);

var n = 4;
var expected = 14;
var result = monkeyMove(n);
console.log(result, result === expected);
