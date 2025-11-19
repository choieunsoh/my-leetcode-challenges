// 507. Perfect Number
// https://leetcode.com/problems/perfect-number/description/
// Euclid-Euler Theorem
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  const primes = [2, 3, 5, 7, 13, 17, 19, 31];
  for (const prime of primes) {
    if (pn(prime) === num) {
      return true;
    }
  }
  return false;

  function pn(p) {
    return (1 << (p - 1)) * ((1 << p) - 1);
  }
};

var num = 28;
var expected = true;
var result = checkPerfectNumber(num);
console.log(result, result === expected);

var num = 7;
var expected = false;
var result = checkPerfectNumber(num);
console.log(result, result === expected);
