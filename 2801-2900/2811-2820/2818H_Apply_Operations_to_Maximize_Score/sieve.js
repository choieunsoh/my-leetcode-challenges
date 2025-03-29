// 2818. Apply Operations to Maximize Score
// https://leetcode.com/problems/apply-operations-to-maximize-score/
// Sieve of Eratosthenes
// T.C.: O(n*sqrt(m) + n log n)
// S.C: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const primeScores = new Array(n).fill(0);

  // Find the maximum element in nums to determine the range for prime generation
  const maxElement = Math.max(...nums);

  // Get all prime numbers up to maxElement using the Sieve of Eratosthenes
  const primes = getPrimes(maxElement);

  // Calculate the prime score for each number in nums
  for (let index = 0; index < n; index++) {
    let num = nums[index];

    // Iterate over the generated primes to count unique prime factors
    for (const prime of primes) {
      if (prime * prime > num) break; // Stop early if prime^2 exceeds num
      if (num % prime !== 0) continue; // Skip if the prime is not a factor

      primeScores[index]++; // Increment prime score for the factor
      while (num % prime === 0) num /= prime; // Remove all occurrences of this factor
    }

    // If num is still greater than 1, it is a prime number itself
    if (num > 1) primeScores[index]++;
  }

  // Initialize next and previous dominant index arrays
  const nextDominant = new Array(n).fill(n);
  const prevDominant = new Array(n).fill(-1);

  // Stack to store indices for a monotonic decreasing prime score
  const decreasingPrimeScoreStack = [];

  // Calculate the next and previous dominant indices for each number
  for (let index = 0; index < n; index++) {
    while (
      decreasingPrimeScoreStack.length > 0 &&
      primeScores[decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1]] < primeScores[index]
    ) {
      const topIndex = decreasingPrimeScoreStack.pop();
      nextDominant[topIndex] = index;
    }

    if (decreasingPrimeScoreStack.length > 0) {
      prevDominant[index] = decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1];
    }

    decreasingPrimeScoreStack.push(index);
  }

  // Calculate the number of subarrays in which each element is dominant
  const numOfSubarrays = new Array(n).fill(0);
  for (let index = 0; index < n; index++) {
    numOfSubarrays[index] = BigInt(nextDominant[index] - index) * BigInt(index - prevDominant[index]);
  }

  // Sort elements in decreasing order based on their values
  const sortedArray = [];
  for (let index = 0; index < n; index++) {
    sortedArray.push([nums[index], index]);
  }
  sortedArray.sort((a, b) => b[0] - a[0]); // Sort in descending order

  let score = BigInt(1);
  let processingIndex = 0;

  // Process elements while there are operations left
  while (k > 0) {
    const element = sortedArray[processingIndex++];
    const num = element[0];
    const index = element[1];

    // Calculate the number of operations to apply on the current element
    const operations = Math.min(k, Number(numOfSubarrays[index]));

    // Update the score by raising the element to the power of operations
    score = (score * power(BigInt(num), BigInt(operations))) % BigInt(MOD);

    // Reduce the remaining operations count
    k -= operations;
  }

  return Number(score);

  // Helper function to compute the power of a number modulo MOD
  function power(base, exponent) {
    let res = BigInt(1);

    while (exponent > 0) {
      if (exponent % BigInt(2) === BigInt(1)) {
        res = (res * base) % BigInt(1000000007);
      }
      base = (base * base) % BigInt(1000000007);
      exponent /= BigInt(2);
    }

    return res;
  }

  // Function to generate prime numbers up to a given limit using the Sieve of Eratosthenes
  function getPrimes(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    const primes = [];

    for (let number = 2; number <= limit; number++) {
      if (!isPrime[number]) continue;

      primes.push(number);

      for (let multiple = number * number; multiple <= limit; multiple += number) {
        isPrime[multiple] = false;
      }
    }

    return primes;
  }
};

var nums = [8, 3, 9, 3, 8],
  k = 2;
var expected = 81;
var result = maximumScore(nums, k);
console.log(result, result === expected);

var nums = [19, 12, 14, 6, 10, 18],
  k = 3;
var expected = 4788;
var result = maximumScore(nums, k);
console.log(result, result === expected);
