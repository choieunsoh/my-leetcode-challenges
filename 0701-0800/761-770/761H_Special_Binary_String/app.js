// 761. Special Binary String
// https://leetcode.com/problems/special-binary-string/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {
  if (s.length === 0) return s;

  let anchor = 0;
  let sum = 0;
  const mountains = [];
  for (let i = 0; i < s.length; i++) {
    sum += s.charAt(i) === '1' ? 1 : -1;
    if (sum === 0) {
      mountains.push('1' + makeLargestSpecial(s.substring(anchor + 1, i)) + '0');
      anchor = i + 1;
    }
  }

  mountains.sort((a, b) => b.localeCompare(a));

  return mountains.join('');
};

var s = '11011000';
var expected = '11100100';
var result = makeLargestSpecial(s);
console.log(result, result === expected);

var s = '10';
var expected = '10';
var result = makeLargestSpecial(s);
console.log(result, result === expected);
