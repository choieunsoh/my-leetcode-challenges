// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/
// T.C.: O(N * 2^N)
// S.C.: O(N^2)
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length;
  const dp = Array.from({ length: n }, () => new Array(n));
  const result = [];
  backtracking(0, []);
  return result;

  function backtracking(start, parts) {
    if (start === s.length) {
      result.push([...parts]);
      return;
    }

    for (let end = start; end < n; end++) {
      if (s[start] === s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
        dp[start][end] = true;
        const word = s.substring(start, end + 1);
        parts.push(word);
        console.log(start, end, word, parts);
        backtracking(end + 1, parts);
        parts.pop();
      }
    }
  }
};

var s = 'aab';
var expected = [
  ['a', 'a', 'b'],
  ['aa', 'b'],
];
var result = partition(s);
console.log(result, result.join() === expected.join());

var s = 'a';
var expected = [['a']];
var result = partition(s);
console.log(result, result.join() === expected.join());
