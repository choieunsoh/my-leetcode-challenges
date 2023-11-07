// 786. K-th Smallest Prime Fraction
// https://leetcode.com/problems/k-th-smallest-prime-fraction/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const n = arr.length;
  let left = 0;
  let right = 1;
  let p = 0;
  let q = 1;
  while (left < right) {
    p = 0;
    const mid = (left + right) / 2;
    const c = count(mid);
    if (c === k) {
      return [p, q];
    }
    if (c < k) {
      left = mid;
    } else {
      right = mid;
    }
  }

  function count(num) {
    let c = 0;
    for (let i = 0, j = n - 1; i < n; i++) {
      while (j >= 0 && arr[i] > num * arr[n - j - 1]) j--;
      c += j + 1;
      if (j >= 0 && p * arr[n - j - 1] < arr[i] * q) {
        p = arr[i];
        q = arr[n - j - 1];
      }
    }
    return c;
  }
};

var arr = [1, 2, 3, 5],
  k = 3;
var expected = [2, 5];
var result = kthSmallestPrimeFraction(arr, k);
console.log(result, result.join() === expected.join());

var arr = [1, 7],
  k = 1;
var expected = [1, 7];
var result = kthSmallestPrimeFraction(arr, k);
console.log(result, result.join() === expected.join());
