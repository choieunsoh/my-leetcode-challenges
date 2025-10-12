// 3539. Find Sum of Array Product of Magical Sequences
// https://leetcode.com/problems/find-sum-of-array-product-of-magical-sequences/description/
// T.C.: O(n*m^3*k)
// S.C.: O(n*m^2*k)
/**
 * @param {number} m
 * @param {number} k
 * @param {number[]} nums
 * @return {number}
 */
var magicalSum = function (m, k, nums) {
  const n = nums.length;
  const mod = 1000000007n;

  const fac = new Array(m + 1).fill(1n);
  for (let i = 1; i <= m; i++) {
    fac[i] = (fac[i - 1] * BigInt(i)) % mod;
  }

  const iFac = new Array(m + 1).fill(1n);
  for (let i = 2; i <= m; i++) {
    iFac[i] = quickMul(BigInt(i), mod - 2n, mod);
  }
  for (let i = 2; i <= m; i++) {
    iFac[i] = (iFac[i - 1] * iFac[i]) % mod;
  }

  const numsPower = new Array(n);
  for (let i = 0; i < n; i++) {
    numsPower[i] = new Array(m + 1).fill(1n);
    for (let j = 1; j <= m; j++) {
      numsPower[i][j] = (numsPower[i][j - 1] * BigInt(nums[i])) % mod;
    }
  }

  const f = new Array(n);
  for (let i = 0; i < n; i++) {
    f[i] = new Array(m + 1);
    for (let j = 0; j <= m; j++) {
      f[i][j] = new Array(m * 2 + 1);
      for (let p = 0; p <= m * 2; p++) {
        f[i][j][p] = new Array(k + 1).fill(0n);
      }
    }
  }

  for (let j = 0; j <= m; j++) {
    f[0][j][j][0] = (numsPower[0][j] * iFac[j]) % mod;
  }

  for (let i = 0; i + 1 < n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let p = 0; p <= m * 2; p++) {
        for (let q = 0; q <= k; q++) {
          if (f[i][j][p][q] === 0n) {
            continue;
          }
          const q2 = (p % 2) + q;
          if (q2 > k) {
            break;
          }
          for (let r = 0; r + j <= m; r++) {
            const p2 = Math.floor(p / 2) + r;
            if (p2 > m * 2) {
              continue;
            }
            f[i + 1][j + r][p2][q2] =
              (f[i + 1][j + r][p2][q2] + ((((f[i][j][p][q] * numsPower[i + 1][r]) % mod) * iFac[r]) % mod)) % mod;
          }
        }
      }
    }
  }

  let result = 0n;
  for (let p = 0; p <= m * 2; p++) {
    for (let q = 0; q <= k; q++) {
      if (popCount(p) + q === k) {
        result = (result + ((f[n - 1][m][p][q] * fac[m]) % mod)) % mod;
      }
    }
  }
  return Number(result);

  function popCount(x) {
    let count = 0;
    while (x > 0) {
      count += x & 1;
      x >>= 1;
    }
    return count;
  }

  function quickMul(x, y, mod) {
    let result = 1n;
    let curr = x % mod;
    while (y > 0) {
      if ((y & 1n) == 1n) {
        result = (result * curr) % mod;
      }
      y >>= 1n;
      curr = (curr * curr) % mod;
    }
    return result;
  }
};

var m = 5,
  k = 5,
  nums = [1, 10, 100, 10000, 1000000];
var expected = 991600007;
var result = magicalSum(m, k, nums);
console.log(result, result === expected);

var m = 2,
  k = 2,
  nums = [5, 4, 3, 2, 1];
var expected = 170;
var result = magicalSum(m, k, nums);
console.log(result, result === expected);

var m = 1,
  k = 1,
  nums = [28];
var expected = 28;
var result = magicalSum(m, k, nums);
console.log(result, result === expected);
