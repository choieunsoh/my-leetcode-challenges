// 2315. Count Asterisks
// https://leetcode.com/problems/count-asterisks/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0;
  let vBarCount = 0;
  for (const ch of s) {
    if (ch === '|') {
      vBarCount++;
    }
    if (vBarCount % 2 === 0 && ch === '*') {
      count++;
    }
  }
  return count;
};

var s = 'l|*e*et|c**o|*de|';
var expected = 2;
var result = countAsterisks(s);
console.log(result, result === expected);

var s = 'iamprogrammer';
var expected = 0;
var result = countAsterisks(s);
console.log(result, result === expected);

var s = 'yo|uar|e**|b|e***au|tifu|l';
var expected = 5;
var result = countAsterisks(s);
console.log(result, result === expected);

var s = '*||*|||||*|*|***||*||***|';
var expected = 3;
var result = countAsterisks(s);
console.log(result, result === expected);

var s = '*||||**||*||**|**||*|||**';
var expected = 8;
var result = countAsterisks(s);
console.log(result, result === expected);
