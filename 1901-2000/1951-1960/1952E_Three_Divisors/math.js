// 1952. Three Divisors
// https://leetcode.com/problems/three-divisors/
// T.C.: O(n^0.25)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  if (n < 4) return false;
  const root = Math.sqrt(n);
  if (!Number.isInteger(root)) return false;

  // Check if root is prime
  if (root < 2) return false;
  for (let i = 2; i * i <= root; i++) {
    if (root % i === 0) return false;
  }
  return true;
};

var n = 2;
var expected = false;
var result = isThree(n);
console.log(result, result === expected);

var n = 4;
var expected = true;
var result = isThree(n);
console.log(result, result === expected);

var n = 12;
var expected = false;
var result = isThree(n);
console.log(result, result === expected);
