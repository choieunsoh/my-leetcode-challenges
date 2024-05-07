// 1010. Pairs of Songs With Total Durations Divisible by 60
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function (time) {
  let result = 0;
  const remainders = new Array(60).fill(0);
  for (const duration of time) {
    if (duration % 60 === 0) {
      result += remainders[0];
    } else {
      const remain = 60 - (duration % 60);
      result += remainders[remain];
    }
    remainders[duration % 60]++;
  }
  return result;
};

var time = [30, 20, 150, 100, 40];
var expected = 3;
var result = numPairsDivisibleBy60(time);
console.log(result, result === expected);

var time = [60, 60, 60];
var expected = 3;
var result = numPairsDivisibleBy60(time);
console.log(result, result === expected);
