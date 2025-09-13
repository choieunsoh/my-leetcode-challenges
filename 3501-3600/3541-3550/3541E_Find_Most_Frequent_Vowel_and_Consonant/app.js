// 3541. Find Most Frequent Vowel and Consonant
// https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const [a, e, i, o, u] = vowels.map((v) => v.charCodeAt(0));
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - a;
    counts[index]++;
  }

  let maxVowelCount = 0;
  let maxConsonantCount = 0;
  for (let index = 0; index < counts.length; index++) {
    const charCode = index + a;
    if (charCode === a || charCode === e || charCode === i || charCode === o || charCode === u) {
      maxVowelCount = Math.max(maxVowelCount, counts[index]);
    } else {
      maxConsonantCount = Math.max(maxConsonantCount, counts[index]);
    }
  }
  return maxVowelCount + maxConsonantCount;
};

var s = 'successes';
var expected = 6;
var result = maxFreqSum(s);
console.log(result, result === expected);

var s = 'aeiaeia';
var expected = 3;
var result = maxFreqSum(s);
console.log(result, result === expected);
