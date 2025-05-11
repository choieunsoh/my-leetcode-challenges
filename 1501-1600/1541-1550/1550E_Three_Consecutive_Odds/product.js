// 1550. Three Consecutive Odds
// https://leetcode.com/problems/three-consecutive-odds/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 2; i < arr.length; i++) {
    const product = arr[i] * arr[i - 1] * arr[i - 2];
    if (product % 2 === 1) {
      return true;
    }
  }
  return false;
};

var arr = [2, 6, 4, 1];
var expected = false;
var result = threeConsecutiveOdds(arr);
console.log(result, result === expected);

var arr = [1, 2, 34, 3, 4, 5, 7, 23, 12];
var expected = true;
var result = threeConsecutiveOdds(arr);
console.log(result, result === expected);
