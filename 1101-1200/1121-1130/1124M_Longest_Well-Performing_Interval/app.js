// 1124. Longest Well-Performing Interval
// https://leetcode.com/problems/longest-well-performing-interval/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let sum = 0;
  let result = 0;
  const map = new Map();
  for (let i = 0; i < hours.length; i++) {
    sum += hours[i] > 8 ? 1 : -1;
    if (!map.has(sum)) {
      map.set(sum, i);
    }
    if (sum > 0) {
      result = i + 1;
    } else if (map.has(sum - 1)) {
      result = Math.max(result, i - map.get(sum - 1));
    }
  }
  return result;
};

var hours = [9, 9, 6, 0, 6, 6, 9];
var expected = 3;
var result = longestWPI(hours);
console.log(result, result === expected);

var hours = [6, 6, 6];
var expected = 0;
var result = longestWPI(hours);
console.log(result, result === expected);

var hours = [6, 6, 9];
var expected = 1;
var result = longestWPI(hours);
console.log(result, result === expected);
