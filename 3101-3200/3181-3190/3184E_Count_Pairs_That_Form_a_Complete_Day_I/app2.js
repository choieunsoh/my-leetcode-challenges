// 3184. Count Pairs That Form a Complete Day I
// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {
  const counts = new Array(24).fill(0);
  for (const hour of hours) {
    counts[hour % 24]++;
  }

  let pairs = 0;
  for (let hour = 0; hour < 24; hour++) {
    if (hour === 0 || hour === 12) {
      pairs += (counts[hour] * (counts[hour] - 1)) / 2;
    } else {
      pairs += (counts[hour] * counts[24 - hour]) / 2;
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
