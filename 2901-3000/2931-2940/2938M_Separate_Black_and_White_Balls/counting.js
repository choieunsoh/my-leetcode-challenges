// 2938. Separate Black and White Balls
// https://leetcode.com/problems/separate-black-and-white-balls/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  const n = s.length;
  let swaps = 0;
  let blackBallCount = 0;
  for (let right = 0; right < n; right++) {
    if (s.charAt(right) === '1') {
      blackBallCount++;
    } else {
      swaps += blackBallCount;
    }
  }
  return swaps;
};

var s = '101';
var expected = 1;
var result = minimumSteps(s);
console.log(result, result === expected);

var s = '100';
var expected = 2;
var result = minimumSteps(s);
console.log(result, result === expected);

var s = '0111';
var expected = 0;
var result = minimumSteps(s);
console.log(result, result === expected);

var s = '101110';
var expected = 5;
var result = minimumSteps(s);
console.log(result, result === expected);

var s = '101010';
var expected = 6;
var result = minimumSteps(s);
console.log(result, result === expected);
