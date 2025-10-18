// 2315. Count Asterisks
// https://leetcode.com/problems/count-asterisks/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  const parts = s.split('|');
  let count = 0;
  for (let i = 0; i < parts.length; i += 2) {
    for (const ch of parts[i]) {
      if (ch === '*') {
        count++;
      }
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
