// 3184. Count Pairs That Form a Complete Day I
// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  let pairs = 0;
  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) {
        pairs++;
      }
    }
  }
  return pairs;
};

var hours = [12, 12, 30, 24, 24];
var expected = 2;
var result = countCompleteDayPairs(hours);
console.log(result, result === expected);

var hours = [72, 48, 24, 3];
var expected = 3;
var result = countCompleteDayPairs(hours);
console.log(result, result === expected);

var hours = [72, 48, 24, 24, 3, 3, 21, 21];
var expected = 10;
var result = countCompleteDayPairs(hours);
console.log(result, result === expected);
