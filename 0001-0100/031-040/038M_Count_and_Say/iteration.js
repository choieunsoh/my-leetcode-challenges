// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
// T.C.: O(4^(n/3))
// S.C.: O(4^(n/3))
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let currentString = '1';
  for (let i = 2; i <= n; i++) {
    let nextString = '';
    for (let j = 0, k = 0; j < currentString.length; j = k) {
      while (k < currentString.length && currentString.charAt(k) === currentString.charAt(j)) {
        k++;
      }
      nextString += (k - j).toString() + currentString.charAt(j);
    }
    currentString = nextString;
  }
  return currentString;
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
