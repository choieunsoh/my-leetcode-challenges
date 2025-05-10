// 3343. Count Number of Balanced Permutations
// https://leetcode.com/problems/count-number-of-balanced-permutations/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {string} num
 * @return {number}
 */
var countBalancedPermutations = function (num) {
  const MOD = BigInt(1e9 + 7);
  let total = 0;
  const n = num.length;
  const counts = new Array(10).fill(0);
  for (const ch of num) {
    const digit = Number(ch);
    counts[digit]++;
    total += digit;
  }

  if (total % 2 !== 0) {
    return 0;
  }

  const target = total / 2;
  const maxOdd = Math.floor((n + 1) / 2);
  const comb = new Array(maxOdd + 1);
  for (let i = 0; i <= maxOdd; i++) {
    comb[i] = new Array(maxOdd + 1).fill(0n);
    comb[i][i] = comb[i][0] = 1n;
    for (let j = 1; j < i; j++) {
      comb[i][j] = (comb[i - 1][j] + comb[i - 1][j - 1]) % MOD;
    }
  }

  const f = new Array(Number(target) + 1);
  for (let i = 0; i <= Number(target); i++) {
    f[i] = new Array(maxOdd + 1).fill(0n);
  }
  f[0][0] = 1n;

  let pSum = 0;
  let totSum = 0;
  for (let i = 0; i <= 9; i++) {
    /* Sum of the number of the first i digits */
    pSum += counts[i];
    /* Sum of the first i numbers */
    totSum += i * counts[i];
    for (let oddCnt = Math.min(pSum, maxOdd); oddCnt >= Math.max(0, pSum - (n - maxOdd)); oddCnt--) {
      /* The number of bits that need to be filled in even numbered positions */
      const evenCnt = pSum - oddCnt;
      for (let curr = Math.min(totSum, target); curr >= Math.max(0, totSum - target); curr--) {
        let result = 0n;
        for (let j = Math.max(0, counts[i] - evenCnt); j <= Math.min(counts[i], oddCnt) && i * j <= curr; j++) {
          /* The current digit is filled with j positions at odd positions, and cnt[i] - j positions at even positions */
          const ways = (comb[oddCnt][j] * comb[evenCnt][counts[i] - j]) % MOD;
          result = (result + ((ways * f[curr - i * j][oddCnt - j]) % MOD)) % MOD;
        }
        f[curr][oddCnt] = result % MOD;
      }
    }
  }

  return Number(f[target][maxOdd]);
};

var num = '123';
var expected = 2;
var result = countBalancedPermutations(num);
console.log(result, result === expected);

var num = '112';
var expected = 1;
var result = countBalancedPermutations(num);
console.log(result, result === expected);

var num = '12345';
var expected = 0;
var result = countBalancedPermutations(num);
console.log(result, result === expected);
