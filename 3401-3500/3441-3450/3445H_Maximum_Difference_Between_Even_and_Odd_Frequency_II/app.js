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
  const counter = new Array(5).fill(0);
  const counters = [[...counter]];

  // Build prefix frequency array
  for (const c of s) {
    counter[Number(c)]++;
    counters.push([...counter]);
  }

  let result = -3;
  for (let a = 0; a < 5; a++) {
    for (let b = 0; b < 5; b++) {
      // Trim infeasible cases
      if (a === b || counter[a] < 1 || counter[b] < 2) continue;

      let ptr = 0;
      const mins = [
        [Infinity, Infinity],
        [Infinity, Infinity],
      ];

      for (let i = k; i <= s.length; i++) {
        // Slide the left pointer, ensure the substring has at least 2 occurrences of `b`
        while (ptr <= i - k && counters[ptr][b] < counters[i][b] - 1) {
          const x = counters[ptr][a] & 1;
          const y = counters[ptr][b] & 1;
          mins[x][y] = Math.min(mins[x][y], counters[ptr][a] - counters[ptr][b]);
          ptr++;
        }

        // Find corresponding parities of the substring
        const xx = ~counters[i][a] & 1;
        const yy = counters[i][b] & 1;
        result = Math.max(result, counters[i][a] - counters[i][b] - mins[xx][yy]);
      }
    }
  }
  return result;
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
