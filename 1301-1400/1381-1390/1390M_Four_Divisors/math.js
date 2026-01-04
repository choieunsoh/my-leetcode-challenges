// 1390. Four Divisors
// https://leetcode.com/problems/four-divisors/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  const MAX = 100000;
  const limit = Math.floor(Math.sqrt(MAX)) + 1; // ~317
  const isPrime = sieve(limit);
  const primes = [];
  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) primes.push(i);
  }

  let total = 0;
  for (const num of nums) {
    total += getFourDivisorSum(num, primes);
  }
  return total;

  function sieve(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime;
  }

  function getFourDivisorSum(num, primes) {
    // Try to find smallest prime factor
    let firstPrime = -1;
    for (const p of primes) {
      if (p * p > num) break;
      if (num % p === 0) {
        firstPrime = p;
        break;
      }
    }

    if (firstPrime === -1) {
      // num is prime or 1 → divisors: [1, num] → only 2 divisors
      return 0;
    }

    const other = num / firstPrime;

    // Case 1: num = p * q, distinct primes
    if (other !== firstPrime) {
      // Check if 'other' is prime
      if (isPrimeCheck(other, primes)) {
        return 1 + firstPrime + other + num;
      }
    }

    // Case 2: num = p^3 → then num = p * p * p → so other = p^2
    // Check if other == firstPrime * firstPrime
    if (other === firstPrime * firstPrime) {
      // Then num = p^3 → divisors: 1, p, p^2, p^3
      return 1 + firstPrime + other + num;
    }

    return 0;
  }

  function isPrimeCheck(x, primes) {
    if (x < 2) return false;
    // If x <= limit^2 (~100k), we can check via trial division with primes
    for (const p of primes) {
      if (p * p > x) break;
      if (x % p === 0) return false;
    }
    return true;
  }
};

var nums = [21, 4, 7];
var expected = 32;
var result = sumFourDivisors(nums);
console.log(result, result === expected);

var nums = [21, 21];
var expected = 64;
var result = sumFourDivisors(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = 0;
var result = sumFourDivisors(nums);
console.log(result, result === expected);
