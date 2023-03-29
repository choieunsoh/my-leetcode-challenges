// 2523. Closest Prime Numbers in Range
// https://leetcode.com/problems/closest-prime-numbers-in-range/
let isPrime = [];
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const result = [-1, -1];
  if (isPrime.length === 0) {
    isPrime = createPrimeNumber(1e6 + 1);
  }

  let min = Number.MAX_SAFE_INTEGER;
  let [one, two] = result;
  for (let i = left; i <= right; i++) {
    if (!isPrime[i]) continue;
    [one, two] = [two, i];
    if (one !== -1 && two !== -1) {
      if (two - one < min) {
        min = two - one;
        result[0] = one;
        result[1] = two;
      }
    }
  }
  return result;

  function createPrimeNumber(n) {
    const prime = Array(n + 1).fill(true);
    prime[0] = false;
    prime[1] = false;
    for (let i = 2; i * i < n; i++) {
      if (!prime[i]) continue;
      for (let j = i * i; j < n; j += i) {
        prime[j] = false;
      }
    }
    return prime;
  }
};

var left = 10,
  right = 19;
var expected = [11, 13];
var result = closestPrimes(left, right);
console.log(result, result.join() === expected.join());

var left = 4,
  right = 6;
var expected = [-1, -1];
var result = closestPrimes(left, right);
console.log(result, result.join() === expected.join());

var left = 147106,
  right = 213773;
var expected = [147137, 147139];
var result = closestPrimes(left, right);
console.log(result, result.join() === expected.join());
