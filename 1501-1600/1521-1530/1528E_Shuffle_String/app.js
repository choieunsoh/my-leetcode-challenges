// 1528. Shuffle String
// https://leetcode.com/problems/shuffle-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const result = [];
  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s.charAt(i);
  }
  return result.join('');
};

var s = 'codeleet',
  indices = [4, 5, 6, 7, 0, 2, 1, 3];
var expected = 'leetcode';
var result = restoreString(s, indices);
console.log(result, result === expected);

var s = 'abc',
  indices = [0, 1, 2];
var expected = 'abc';
var result = restoreString(s, indices);
console.log(result, result === expected);
