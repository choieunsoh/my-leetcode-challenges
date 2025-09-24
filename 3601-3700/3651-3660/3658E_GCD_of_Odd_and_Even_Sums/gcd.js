// 3658. GCD of Odd and Even Sums
// https://leetcode.com/problems/gcd-of-odd-and-even-sums/description/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
  const sumEven = (n + 1) * n;
  const sumOdd = n * n;
  return gcd(sumOdd, sumEven);

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
};

var n = 4;
var expected = 4;
var result = gcdOfOddEvenSums(n);
console.log(result, result === expected);

var n = 5;
var expected = 5;
var result = gcdOfOddEvenSums(n);
console.log(result, result === expected);

var n = 6;
var expected = 6;
var result = gcdOfOddEvenSums(n);
console.log(result, result === expected);

var n = 10;
var expected = 6;
var result = gcdOfOddEvenSums(n);
console.log(result, result === expected);
