// https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 1) return 0;

  let count = 0;
  const primes = Array(n).fill(true);
  for (let i = 2; i <= n; i++) {
    if (primes[i] === true) {
      count++;
      for (let j = 2 * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }
  return count;
};

console.log(countPrimes(20));
console.log(countPrimes(200));
