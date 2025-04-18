// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
// T.C.: O(4^(n/3))
// S.C.: O(4^(n/3))
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let s = '1';
  for (let i = 2; i <= n; i++) {
    let t = '';
    const regex = /(.)\1*/g;
    let match;
    while ((match = regex.exec(s)) !== null) {
      t += match[0].length.toString() + match[1];
    }
    s = t;
  }
  return s;
};

var n = 1;
var expected = '1';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 4;
var expected = '1211';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 5;
var expected = '111221';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 6;
var expected = '312211';
var result = countAndSay(n);
console.log(result, result === expected);
