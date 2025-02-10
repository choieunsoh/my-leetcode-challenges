// 3445. Maximum Difference Between Even and Odd Frequency II
// https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDifference = function (s, k) {
  const n = s.length;
  const prefixSum = Array.from({ length: 5 }, () => Array(n).fill(0));
  const closestRight = Array.from({ length: 5 }, () => Array(n).fill(n));

  for (let x = 0; x < 5; x++) {
    for (let i = 0; i < n; i++) {
      const num = Number(s[i]);
      prefixSum[x][i] = num === x ? 1 : 0;
      if (i > 0) prefixSum[x][i] += prefixSum[x][i - 1];
    }
    for (let i = n - 1; i >= 0; i--) {
      const num = Number(s[i]);
      if (i < n - 1) closestRight[x][i] = closestRight[x][i + 1];
      if (num === x) closestRight[x][i] = i;
    }
  }

  let result = -Infinity;
  for (let a = 0; a <= 4; a++) {
    for (let b = 0; b <= 4; b++) {
      if (a !== b) {
        go(a, b);
      }
    }
  }
  return result;

  function go(odd, even) {
    const suffixMax = Array.from({ length: 2 }, () => Array.from({ length: 2 }, () => Array(n).fill(-Infinity)));
    for (let endIdx = 0; endIdx < n; endIdx++) {
      const oddParity = prefixSum[odd][endIdx] % 2;
      const evenParity = prefixSum[even][endIdx] % 2;
      if (prefixSum[odd][endIdx] > 0 && prefixSum[even][endIdx] > 0) {
        suffixMax[oddParity][evenParity][endIdx] = prefixSum[odd][endIdx] - prefixSum[even][endIdx];
      }
    }

    for (let oddParity = 0; oddParity < 2; oddParity++) {
      for (let evenParity = 0; evenParity < 2; evenParity++) {
        for (let endIdx = n - 2; endIdx >= 0; endIdx--) {
          suffixMax[oddParity][evenParity][endIdx] = Math.max(
            suffixMax[oddParity][evenParity][endIdx],
            suffixMax[oddParity][evenParity][endIdx + 1]
          );
        }
      }
    }

    for (let startIdx = 0; startIdx < n; startIdx++) {
      let minEndIdx = startIdx + k - 1;
      if (minEndIdx >= n) break;

      let oddBelow_i = startIdx === 0 ? 0 : prefixSum[odd][startIdx - 1];
      let evenBelow_i = startIdx === 0 ? 0 : prefixSum[even][startIdx - 1];

      let goodOddParity = (oddBelow_i + 1) % 2;
      let goodEvenParity = evenBelow_i % 2;

      const query = Math.max(startIdx + k - 1, closestRight[odd][startIdx], closestRight[even][startIdx]);
      if (query >= n) continue;

      let val = suffixMax[goodOddParity][goodEvenParity][query];
      if (val === -Infinity) continue;

      result = Math.max(result, val - oddBelow_i + evenBelow_i);
    }
  }
};

var s = '12233',
  k = 4;
var expected = -1;
var result = maxDifference(s, k);
console.log(result, result === expected);

var s = '1122211',
  k = 3;
var expected = 1;
var result = maxDifference(s, k);
console.log(result, result === expected);

var s = '110',
  k = 3;
var expected = -1;
var result = maxDifference(s, k);
console.log(result, result === expected);
