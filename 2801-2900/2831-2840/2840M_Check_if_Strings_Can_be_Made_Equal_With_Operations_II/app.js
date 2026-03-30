// 2840. Check if Strings Can be Made Equal With Operations II
// https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  const a = 'a'.charCodeAt(0);
  const oddCounts = new Array(26).fill(0);
  const evenCounts = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    const counts = i % 2 ? oddCounts : evenCounts;
    counts[s1.charCodeAt(i) - a]++;
    counts[s2.charCodeAt(i) - a]--;
  }

  for (let i = 0; i < 26; i++) {
    if (evenCounts[i] !== 0 || oddCounts[i] !== 0) return false;
  }

  return true;
};

var s1 = 'abcdba',
  s2 = 'cabdab';
var expected = true;
var result = checkStrings(s1, s2);
console.log(result, result === expected);

var s1 = 'abe',
  s2 = 'bea';
var expected = false;
var result = checkStrings(s1, s2);
console.log(result, result === expected);
