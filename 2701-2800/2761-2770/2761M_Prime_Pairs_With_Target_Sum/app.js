// 2761. Prime Pairs With Target Sum
// https://leetcode.com/problems/prime-pairs-with-target-sum/
let isPrime = [];
if (isPrime.length === 0) {
  isPrime = createPrimeNumbers(1e6);
}
function createPrimeNumbers(n) {
  const prime = Array(n + 1).fill(true);
  prime[0] = false;
  prime[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (!prime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      prime[j] = false;
    }
  }
  return prime;
}

/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function (n) {
  const result = [];
  for (let i = 2; i <= n / 2; i++) {
    const num1 = i;
    const num2 = n - i;
    if (isPrime[num1] && isPrime[num2]) {
      result.push([num1, num2]);
    }
  }
  return result;
};

var n = 10;
var expected = [
  [3, 7],
  [5, 5],
];
var result = findPrimePairs(n);
console.log(result, result.join() === expected.join());

var n = 2;
var expected = [];
var result = findPrimePairs(n);
console.log(result, result.join() === expected.join());
