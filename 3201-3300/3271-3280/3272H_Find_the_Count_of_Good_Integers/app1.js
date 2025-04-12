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
  const validClones = [];
  const baseClone = Array(n).fill('0');
  generatePalindromes(baseClone, 0, validClones, k);

  const patterns = new Set();

  // 🔍 Frequency Fingerprint
  for (const clone of validClones) {
    const freq = new Array(10).fill(0);
    for (const c of clone) freq[+c]++;
    patterns.add(freq.join(','));
  }

  const basePerms = factorial(BigInt(n));
  let total = 0n;

  // 🧾 Deduplicate and compute permutations for each frequency
  for (const pattern of patterns) {
    const parts = pattern.split(',').map(Number);
    let perms = basePerms;

    for (const f of parts) perms /= factorial(BigInt(f));

    if (parts[0] > 0) {
      const zeros = parts[0] - 1;
      let zeroPerms = factorial(BigInt(n - 1));
      for (let j = 1; j < parts.length; j++) zeroPerms /= factorial(BigInt(parts[j]));
      zeroPerms /= factorial(BigInt(zeros));
      perms -= zeroPerms;
    }

    total += perms;
  }

  return Number(total);

  function factorial(num) {
    let result = 1n;
    for (let i = 1n; i <= num; i++) result *= i;
    return result;
  }

  // 🌀 Recursive Symmetry Formation for Clones
  function generatePalindromes(clone, index, validClones, k) {
    if (index >= Math.floor((clone.length + 1) / 2)) {
      const value = clone.join('');
      if (BigInt(value) % BigInt(k) === 0n) validClones.push(value);
      return;
    }

    if (index !== 0) {
      clone[index] = '0';
      clone[clone.length - 1 - index] = '0';
      generatePalindromes(clone, index + 1, validClones, k);
    }

    for (let i = 1; i <= 9; i++) {
      clone[index] = String(i);
      clone[clone.length - 1 - index] = String(i);
      generatePalindromes(clone, index + 1, validClones, k);
    }
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
