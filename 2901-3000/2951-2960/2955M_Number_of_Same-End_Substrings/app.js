// 2955. Number of Same-End Substrings
// https://leetcode.com/problems/number-of-same-end-substrings/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sameEndSubstringCount = function (s, queries) {
  const a = 'a'.charCodeAt(0);
  const n = s.length;
  const charFreqPrefixSum = Array.from({ length: 26 }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    charFreqPrefixSum[s.charCodeAt(i) - a][i]++;
  }

  for (let i = 0; i < 26; i++) {
    for (let j = 1; j < n; j++) {
      charFreqPrefixSum[i][j] += charFreqPrefixSum[i][j - 1];
    }
  }

  const q = queries.length;
  const result = new Array(q).fill(0);
  for (let queryIndex = 0; queryIndex < q; queryIndex++) {
    const [leftIndex, rightIndex] = queries[queryIndex];
    let countSameEndSubstrings = 0;
    for (let charIndex = 0; charIndex < 26; charIndex++) {
      const leftFreq = leftIndex > 0 ? charFreqPrefixSum[charIndex][leftIndex - 1] : 0;
      const rightFreq = charFreqPrefixSum[charIndex][rightIndex];
      const frequencyInRange = rightFreq - leftFreq;
      countSameEndSubstrings += (frequencyInRange * (frequencyInRange + 1)) / 2;
    }
    result[queryIndex] = countSameEndSubstrings;
  }
  return result;
};

var s = 'abcaab',
  queries = [
    [0, 0],
    [1, 4],
    [2, 5],
    [0, 5],
  ];
var expected = [1, 5, 5, 10];
var result = sameEndSubstringCount(s, queries);
console.log(result, result.join() === expected.join());

var s = 'abcd',
  queries = [[0, 3]];
var expected = [4];
var result = sameEndSubstringCount(s, queries);
console.log(result, result.join() === expected.join());
