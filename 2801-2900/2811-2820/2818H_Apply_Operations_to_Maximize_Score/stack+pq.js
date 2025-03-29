// 2818. Apply Operations to Maximize Score
// https://leetcode.com/problems/apply-operations-to-maximize-score/
// T.C.: O(n*sqrt(m) + n log n)
// S.C: O(n)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function (nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const primeScores = new Array(n).fill(0);

  // Calculate the prime score for each number in nums
  for (let index = 0; index < n; index++) {
    let num = nums[index];

    // Check for prime factors from 2 to sqrt(n)
    for (let factor = 2; factor <= Math.sqrt(num); factor++) {
      if (num % factor === 0) {
        // Increment prime score for each prime factor
        primeScores[index]++;

        // Remove all occurrences of the prime factor from num
        while (num % factor === 0) num /= factor;
      }
    }

    // If num is still greater than or equal to 2, it's a prime factor
    if (num >= 2) primeScores[index]++;
  }

  // Initialize next and previous dominant index arrays
  const nextDominant = new Array(n).fill(n);
  const prevDominant = new Array(n).fill(-1);

  // Stack to store indices for monotonic decreasing prime score
  const decreasingPrimeScoreStack = [];

  // Calculate the next and previous dominant indices for each number
  for (let index = 0; index < n; index++) {
    // While the stack is not empty and the current prime score is greater than the stack's top
    while (
      decreasingPrimeScoreStack.length > 0 &&
      primeScores[decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1]] < primeScores[index]
    ) {
      const topIndex = decreasingPrimeScoreStack.pop();

      // Set the next dominant element for the popped index
      nextDominant[topIndex] = index;
    }

    // If the stack is not empty, set the previous dominant element for the current index
    if (decreasingPrimeScoreStack.length > 0)
      prevDominant[index] = decreasingPrimeScoreStack[decreasingPrimeScoreStack.length - 1];

    // Push the current index onto the stack
    decreasingPrimeScoreStack.push(index);
  }

  // Calculate the number of subarrays in which each element is dominant
  const numOfSubarrays = Array(n).fill(0);
  for (let index = 0; index < n; index++) {
    numOfSubarrays[index] = (nextDominant[index] - index) * (index - prevDominant[index]);
  }

  // Priority queue to process elements in decreasing order of their value
  // break tie based on the index (ascending order)
  // descending order for the value
  const processingQueue = new PriorityQueue((a, b) => b[0] - a[0] || a[1] - b[1]);

  // Push each number and its index onto the priority queue
  for (let index = 0; index < n; index++) {
    processingQueue.enqueue([nums[index], index]);
  }

  let score = BigInt(1);

  // Process elements while there are operations left
  while (k > 0) {
    // Get the element with the maximum value from the queue
    const [num, index] = processingQueue.dequeue();

    // Calculate the number of operations to apply on the current element
    const operations = Math.min(k, numOfSubarrays[index]);

    // Update the score by raising the element to the power of operations
    score = (score * power(BigInt(num), BigInt(operations))) % BigInt(MOD);

    // Reduce the remaining operations count
    k -= operations;
  }

  return Number(score);

  // Helper function to compute the power of a number modulo MOD
  function power(base, exponent) {
    let result = BigInt(1);

    // Calculate the exponentiation using binary exponentiation
    while (exponent > 0) {
      // If the exponent is odd, multiply the result by the base
      if (exponent % BigInt(2) === BigInt(1)) {
        result = (result * base) % BigInt(1000000007);
      }

      // Square the base and halve the exponent
      base = (base * base) % BigInt(1000000007);
      exponent /= BigInt(2);
    }

    return result;
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
