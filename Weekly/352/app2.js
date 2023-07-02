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
  const primes = getPrimeNumbers(n);
  const nums = [...primes];
  const result = [];
  let i = 0;
  while (nums[i] <= n) {
    const num = nums[i++];
    const target = n - num;
    if (target < num) break;
    if (primes.has(target)) {
      result.push([num, target]);
    }
  }
  return result;

  function getPrimeNumbers(num) {
    const result = new Set();
    for (let i = 1; i < num; i++) {
      if (isPrime[i]) result.add(i);
    }
    return result;
  }
};

var n = 10;
var expected = [
  [3, 7],
  [5, 5],
];
var result = findPrimePairs(n);
console.log(result, result.join() === expected.join());
