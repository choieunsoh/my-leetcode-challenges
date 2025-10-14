// 2427. Number of Common Factors
// https://leetcode.com/problems/number-of-common-factors/
// T.C.: O(sqrt(g))
// S.C.: O(1)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
  const g = gcd(a, b);
  let count = 0;
  for (let i = 1; i * i <= g; i++) {
    if (g % i === 0) {
      count += i * i === g ? 1 : 2;
    }
  }
  return count;

  function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  }
};

var a = 12,
  b = 6;
var expected = 4;
var result = commonFactors(a, b);
console.log(result, result === expected);

var a = 25,
  b = 30;
var expected = 2;
var result = commonFactors(a, b);
console.log(result, result === expected);
