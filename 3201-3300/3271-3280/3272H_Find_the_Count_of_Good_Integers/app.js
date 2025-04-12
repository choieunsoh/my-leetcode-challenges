// 3272. Find the Count of Good Integers
// https://leetcode.com/problems/find-the-count-of-good-integers/description/
// T.C.: O()
// S.C.: O()
/**
 * Counts the number of good integers
 * @param {number} n - Number of digits
 * @param {number} k - Divisibility factor
 * @returns {number} - Count of good numbers
 */
var countGoodIntegers = function (n, k) {
  const num = new Array(n).fill(0);
  const vis = new Set();
  const result = { count: 0 };
  generatePalindrome(num, 0, n - 1, k, n, vis, result);
  return result.count;

  /**
   * Generates palindrome numbers and counts valid ones
   * @param {number[]} num - Array representing the number
   * @param {number} left - Left index
   * @param {number} right - Right index
   * @param {number} k - Divisibility factor
   * @param {number} n - Number length
   * @param {Set} vis - Set to track visited digit maps
   * @param {Object} result - Object to store result count
   */
  function generatePalindrome(num, left, right, k, n, vis, result) {
    if (left > right) {
      const pali = vectorToNumber(num);
      if (pali % k === 0) {
        const freq = {};
        let temp = pali;
        while (temp > 0) {
          const digit = temp % 10;
          freq[digit] = (freq[digit] || 0) + 1;
          temp = Math.floor(temp / 10);
        }

        const freqKey = JSON.stringify(freq);
        if (!vis.has(freqKey)) {
          result.count += calc(freq, n);
          vis.add(freqKey);
        }
      }
      return;
    }

    for (let digit = left === 0 ? 1 : 0; digit <= 9; digit++) {
      num[left] = num[right] = digit;
      generatePalindrome(num, left + 1, right - 1, k, n, vis, result);
    }
  }

  /**
   * @param {number} n
   * @param {number} k
   * @return {number}
   */
  /**
   * Converts an array of digits to a number
   * @param {number[]} num - Array of digits
   * @returns {number} - Converted number
   */
  function vectorToNumber(num) {
    let result = 0;
    for (const digit of num) {
      result = result * 10 + digit;
    }
    return result;
  }

  /**
   * Computes factorial of a number
   * @param {number} n - Input number
   * @returns {number} - Factorial of n
   */
  function fact(n) {
    let result = 1;
    for (let num = 2; num <= n; num++) {
      result *= num;
    }
    return result;
  }

  /**
   * Calculates total permutations of given digit frequencies
   * @param {Object} freq - Frequency map of digits
   * @param {number} n - Length of number
   * @returns {number} - Total unique permutations
   */
  function totalPermutations(freq, n) {
    let totalPermutations = fact(n);
    for (const key in freq) {
      totalPermutations /= fact(freq[key]);
    }
    return totalPermutations;
  }

  /**
   * Computes permutations that start with zero
   * @param {Object} freq - Frequency map of digits
   * @param {number} n - Length of number
   * @returns {number} - Count of permutations that start with zero
   */
  function permutationsStartingWithZero(freq, n) {
    if (!freq[0]) return 0;

    freq[0]--;
    let permutationsWithZero = fact(n - 1);
    for (const key in freq) {
      permutationsWithZero /= fact(freq[key]);
    }
    freq[0]++;
    return permutationsWithZero;
  }

  /**
   * Computes valid permutations avoiding leading zeroes
   * @param {Object} freq - Frequency map of digits
   * @param {number} n - Length of number
   * @returns {number} - Count of valid permutations
   */
  function calc(freq, n) {
    return totalPermutations(freq, n) - permutationsStartingWithZero(freq, n);
  }
};

var n = 3,
  k = 5;
var expected = 27;
var result = countGoodIntegers(n, k);
console.log(result, result === expected);

var n = 1,
  k = 4;
var expected = 2;
var result = countGoodIntegers(n, k);
console.log(result, result === expected);

var n = 5,
  k = 6;
var expected = 2468;
var result = countGoodIntegers(n, k);
console.log(result, result === expected);
