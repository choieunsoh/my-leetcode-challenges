// 2698. Find the Punishment Number of an Integer
// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (dfs(i * i, i)) {
      result += i * i;
    }
  }
  return result;

  function dfs(x, t) {
    if (t < 0) return false;
    if (x === 0) return t === 0;

    let p = 10;
    while (x * 10 >= p) {
      if (dfs((x / p) | 0, t - (x % p))) return true;
      p *= 10;
    }
    return false;
  }
};

var n = 10;
var expected = 182;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 37;
var expected = 1478;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 45;
var expected = 3503;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 756;
var expected = 2725885;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 1000;
var expected = 10804657;
var result = punishmentNumber(n);
console.log(result, result === expected);
