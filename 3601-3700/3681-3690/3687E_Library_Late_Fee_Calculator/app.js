// 3687. Library Late Fee Calculator
// https://leetcode.com/problems/library-late-fee-calculator/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} daysLate
 * @return {number}
 */
var lateFee = function (daysLate) {
  let penalty = 0;
  for (const days of daysLate) {
    if (days === 1) {
      penalty += days;
    } else if (days > 5) {
      penalty += 3 * days;
    } else {
      penalty += 2 * days;
    }
  }
  return penalty;
};

var daysLate = [5, 1, 7];
var expected = 32;
var result = lateFee(daysLate);
console.log(result, result === expected);

var daysLate = [1, 1];
var expected = 2;
var result = lateFee(daysLate);
console.log(result, result === expected);
