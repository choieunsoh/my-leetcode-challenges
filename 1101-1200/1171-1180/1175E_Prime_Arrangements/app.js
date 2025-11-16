// 1175. Prime Arrangements
// https://leetcode.com/problems/prime-arrangements/description/
// T.C.: O(n log (log n))
// S.C.: O(n)
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  const MOD = 1e9 + 7;

  // 1) Count how many primes are in [1..n] using a simple sieve
  const isPrime = new Array(n + 1).fill(false);
  for (let i = 2; i <= n; i++) {
    isPrime[i] = true;
  }
  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let multiple = p * p; multiple <= n; multiple += p) {
        isPrime[multiple] = false;
      }
    }
  }

  let primeCount = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) primeCount++;
  }

  // 2) Compute primeCount! * (n - primeCount)! modulo MOD
  let result = 1;
  for (let i = 1; i <= primeCount; i++) {
    result = (result * i) % MOD;
  }
  for (let i = 1; i <= n - primeCount; i++) {
    result = (result * i) % MOD;
  }

  return result;
};

var n = 5;
var expected = 12;
var result = numPrimeArrangements(n);
console.log(result, result === expected);

var n = 100;
var expected = 682289015;
var result = numPrimeArrangements(n);
console.log(result, result === expected);
