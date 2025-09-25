// 3591. Check if Any Element Has Prime Frequency
// https://leetcode.com/problems/check-if-any-element-has-prime-frequency/description/
// T.C.: O(n)
// S.C.: O(1)
const primes = new Set();

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
  if (primes.size === 0) {
    createPrimes(100);
  }

  const freq = new Array(101).fill(0);
  for (const num of nums) {
    freq[num]++;
  }

  for (let num = 0; num <= 100; num++) {
    if (freq[num] > 1 && primes.has(freq[num])) {
      return true;
    }
  }
  return false;
};

function createPrimes(max) {
  for (let num = 2; num <= 100; num++) {
    if (isPrime(num)) {
      primes.add(num);
    }
  }
}

function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime numbers
  if (n <= 3) return true; // 2 and 3 are prime numbers

  // This is checked so that we can skip middle five numbers in below loop
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

var nums = [1, 2, 3, 4, 5, 4];
var expected = true;
var result = checkPrimeFrequency(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5];
var expected = false;
var result = checkPrimeFrequency(nums);
console.log(result, result === expected);

var nums = [2, 2, 2, 4, 4];
var expected = true;
var result = checkPrimeFrequency(nums);
console.log(result, result === expected);

var nums = [2, 2, 2, 2, 4, 4, 4, 4];
var expected = false;
var result = checkPrimeFrequency(nums);
console.log(result, result === expected);

var nums = [0, 3, 0, 4];
var expected = true;
var result = checkPrimeFrequency(nums);
console.log(result, result === expected);
