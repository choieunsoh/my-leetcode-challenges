// 2911. Minimum Changes to Make K Semi-palindromes
// https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/description/
// T.C.: O(n^3)
// S.C.: O(n^2 log n)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minimumChanges = function (s, k) {
  const n = s.length;
  const cost = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity)); // cost[i][j]: changes to make s[i:j] a semi-palindrome
  for (let d = 1; 2 * d <= n; d++)
    for (
      let length = 2 * d;
      length <= n;
      length += d // every length that d divides, with d < length
    )
      for (let i = 0, j = length; j <= n; i++, j++) cost[i][j] = Math.min(cost[i][j], peel(i, j, d));

  let best = [0, ...new Array(n).fill(Infinity)]; // best[j]: the fewest changes for s[:j] cut into the pieces placed so far
  for (let pieces = 1; pieces < k; pieces++) {
    // every piece but the last
    const next = new Array(n + 1).fill(Infinity);
    for (
      let j = 2 * pieces;
      j <= n - 2 * (k - pieces);
      j++ // 2 letters for each piece, placed or still to come
    )
      next[j] = extend(j);
    best = next;
  }
  return extend(n); // the last piece ends at n

  function peel(i, j, d) {
    // s[i:j] in blocks of d: the outer pair of blocks, then the inside
    let changes = 0;
    for (; j - i > d; i += d, j -= d) {
      for (let t = 0; t < d; t++) {
        if (s[i + t] !== s[j - d + t]) changes++;
      }
    }
    return changes;
  }

  function extend(j) {
    return Math.min(...best.slice(0, j - 1).map((changes, i) => changes + cost[i][j])); // the newest piece s[i:j] starts at an old cut i and gets at least 2 letters
  }
};

var s = 'abcac',
  k = 2;
var expected = 1;
var result = minimumChanges(s, k);
console.log(result, result === expected);

var s = 'abcdef',
  k = 2;
var expected = 2;
var result = minimumChanges(s, k);
console.log(result, result === expected);

var s = 'aabbaa',
  k = 3;
var expected = 0;
var result = minimumChanges(s, k);
console.log(result, result === expected);
