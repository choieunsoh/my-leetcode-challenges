// 1888. Minimum Number of Flips to Make the Binary String Alternating
// https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
  // value to hold starting with zero
  let startZeroNumFlips = 0;
  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      if (s[i] === '0') startZeroNumFlips++;
    } else {
      if (s[i] === '1') startZeroNumFlips++;
    }
  }

  let startOneNumFlips = s.length - startZeroNumFlips;
  let minimumFlips = Math.min(startZeroNumFlips, startOneNumFlips);
  const isEvenLength = s.length % 2 === 0;

  for (let i = 1; i < s.length; i++) {
    // check the previous char to see which
    // value to decrement
    if (s[i - 1] === '1') {
      startZeroNumFlips--;
    } else {
      startOneNumFlips--;
    }

    // swap the 2 variables because we shifted the index by 1
    [startOneNumFlips, startZeroNumFlips] = [startZeroNumFlips, startOneNumFlips];

    // add corresponding number of flips
    if (isEvenLength) {
      if (s[i - 1] === '1') {
        startOneNumFlips++;
      } else {
        startZeroNumFlips++;
      }
    } else {
      if (s[i - 1] === '1') {
        startZeroNumFlips++;
      } else {
        startOneNumFlips++;
      }
    }

    // calculate the number of flips
    minimumFlips = Math.min(startZeroNumFlips, startOneNumFlips, minimumFlips);
  }
  return minimumFlips;
};

var s = '111000';
var expected = 2;
var result = minFlips(s);
console.log(result, result === expected);

var s = '010';
var expected = 0;
var result = minFlips(s);
console.log(result, result === expected);

var s = '1110';
var expected = 1;
var result = minFlips(s);
console.log(result, result === expected);
