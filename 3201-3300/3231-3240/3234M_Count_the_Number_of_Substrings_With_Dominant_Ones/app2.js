// 3234. Count the Number of Substrings With Dominant Ones
// https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const n = s.length;
  // 1) Record the indices of all zeros, with sentinels -1 and n
  const Z = [-1];
  for (let i = 0; i < n; i++) {
    if (s[i] === '0') Z.push(i);
  }
  Z.push(n);
  const m = Z.length - 2; // actual zero count

  let result = 0;

  // 2) Handle k = 0 separately: all-1s substrings
  //    Count runs of consecutive '1's and sum L*(L+1)/2 for each run
  {
    let run = 0;
    for (let i = 0; i < n; i++) {
      if (s[i] === '1') {
        run++;
      } else {
        result += (run * (run + 1)) / 2;
        run = 0;
      }
    }
    result += (run * (run + 1)) / 2;
  }

  // 3) For k = 1..kmax, slide a window of size k over the zero‐positions array
  const kMax = Math.floor((Math.sqrt(1 + 4 * n) - 1) / 2);
  for (let k = 1; k <= kMax; k++) {
    // minimum length for validity: k^2 + k
    const need = k * k + k;
    // each block of k consecutive zeros: Z[i]..Z[i+k-1]
    for (let i = 1; i + k - 1 <= m; i++) {
      const leftZero = Z[i];
      const rightZero = Z[i + k - 1];
      const leftStart = Z[i - 1] + 1; // earliest L
      const leftEnd = leftZero; // latest L
      const rightEnd = Z[i + k] - 1; // latest R

      // For each choice L ∈ [leftStart..leftEnd], R must satisfy
      //   R ≥ max(rightZero, L + need - 1)  and R ≤ rightEnd
      // so we sum:
      //   max(0, rightEnd - max(rightZero, L + need - 1) + 1)
      for (let L = leftStart; L <= leftEnd; L++) {
        const Rstart = Math.max(rightZero, L + need - 1);
        if (Rstart <= rightEnd) {
          result += rightEnd - Rstart + 1;
        }
      }
    }
  }

  return result;
};

var s = '00011';
var expected = 5;
var result = numberOfSubstrings(s);
console.log(result, result === expected);

var s = '101101';
var expected = 16;
var result = numberOfSubstrings(s);
console.log(result, result === expected);
