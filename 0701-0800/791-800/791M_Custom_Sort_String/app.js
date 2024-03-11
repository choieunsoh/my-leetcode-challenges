// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let result = '';
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  for (let i = 0; i < order.length; i++) {
    const ch = order.charAt(i);
    const index = ch.charCodeAt(0) - a;
    const count = counts[index];
    if (count > 0) {
      result += ch.repeat(count);
    }
    counts[index] = 0;
  }

  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    if (count > 0) {
      const ch = String.fromCharCode(i + a);
      result += ch.repeat(count);
    }
  }

  return result;
};

var order = 'cba',
  s = 'abcd';
var expected = 'cbad';
var result = customSortString(order, s);
console.log(result, result === expected);

var order = 'bcafg',
  s = 'abcd';
var expected = 'bcad';
var result = customSortString(order, s);
console.log(result, result === expected);
