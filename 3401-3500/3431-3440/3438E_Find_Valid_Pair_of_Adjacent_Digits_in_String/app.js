// 3438. Find Valid Pair of Adjacent Digits in String
// https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
  const counts = new Array(10).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[Number(s[i])]++;
  }

  let pair = '';
  for (let i = 1; i < s.length; i++) {
    const prev = Number(s[i - 1]);
    const curr = Number(s[i]);
    if (prev !== curr && counts[prev] === prev && counts[curr] === curr) {
      return s[i - 1] + s[i];
    }
  }
  return '';
};

var s = '2523533';
var expected = '23';
var result = findValidPair(s);
console.log(result, result === expected);

var s = '221';
var expected = '21';
var result = findValidPair(s);
console.log(result, result === expected);

var s = '22';
var expected = '';
var result = findValidPair(s);
console.log(result, result === expected);

var s = '1522';
var expected = '';
var result = findValidPair(s);
console.log(result, result === expected);
