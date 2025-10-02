// 3168. Minimum Number of Chairs in a Waiting Room
// https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
  let neededChairs = 0;
  let currentChairs = 0;
  for (const ch of s) {
    if (ch === 'E') {
      currentChairs++;
    } else {
      currentChairs--;
    }
    neededChairs = Math.max(neededChairs, currentChairs);
  }
  return neededChairs;
};

var s = 'EEEEEEE';
var expected = 7;
var result = minimumChairs(s);
console.log(result, result === expected);

var s = 'ELELEEL';
var expected = 2;
var result = minimumChairs(s);
console.log(result, result === expected);

var s = 'ELEELEELLL';
var expected = 3;
var result = minimumChairs(s);
console.log(result, result === expected);
