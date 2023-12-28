// 1531. String Compression II
// https://leetcode.com/problems/string-compression-ii/description/
// T.C.: O(n * k^2)
// S.C.: O(n * k^2)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function (s, k) {
  if (s.length <= k) return 0;
  const hash = Array.from({ length: s.length }, () => new Array(k + 1));
  return dfs(0, k);

  function dfs(idx, k) {
    if (k + idx >= s.length) return 0;
    if (k < 0) return Infinity;
    if (hash[idx][k] != undefined) return hash[idx][k];

    let res = dfs(idx + 1, k - 1);
    let diff = 0;
    let same = 0;
    for (let i = idx; i < s.length && k - diff >= 0; i++) {
      s[i] == s[idx] ? same++ : diff++;
      const length = same <= 1 ? 1 : Math.floor(Math.log(same) / Math.log(10)) + 2;
      res = Math.min(res, length + dfs(i + 1, k - diff));
    }
    return (hash[idx][k] = res);
  }
};

var s = 'aaabcccd',
  k = 2;
var expected = 4;
var result = getLengthOfOptimalCompression(s, k);
console.log(result, result === expected);

var s = 'aabbaa',
  k = 2;
var expected = 2;
var result = getLengthOfOptimalCompression(s, k);
console.log(result, result === expected);

var s = 'aaaaaaaaaaa',
  k = 0;
var expected = 3;
var result = getLengthOfOptimalCompression(s, k);
console.log(result, result === expected);
