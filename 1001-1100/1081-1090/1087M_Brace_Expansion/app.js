// 1087. Brace Expansion
// https://leetcode.com/problems/brace-expansion/description/
// T.C.: O(N∗3^(N/7))
// S.C.: O(N)
/**
 * @param {string} s
 * @return {string[]}
 */
var expand = function (s) {
  const strs = s
    .split(/[\{\}]/g)
    .filter(Boolean)
    .map((s) => s.split(',').sort());
  const result = [];
  backtracking(0, '');
  return result;

  function backtracking(index, str) {
    if (index === strs.length) {
      result.push(str);
      return;
    }

    for (let i = 0; i < strs[index].length; i++) {
      backtracking(index + 1, str + strs[index][i]);
    }
  }
};

var s = '{a,b}c{d,e}f';
var expected = ['acdf', 'acef', 'bcdf', 'bcef'];
var result = expand(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = 'abcd';
var expected = ['abcd'];
var result = expand(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = '{a,b}{z,x,y}';
var expected = ['ax', 'ay', 'az', 'bx', 'by', 'bz'];
var result = expand(s);
console.log(result, result.sort().join() === expected.sort().join());
