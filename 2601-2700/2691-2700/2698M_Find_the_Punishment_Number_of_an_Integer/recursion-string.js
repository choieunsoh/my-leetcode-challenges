// 2698. Find the Punishment Number of an Integer
// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
// T.C.: O(n*2^(log_10(n)))
// S.C.: O(log_10(n))
/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let punishmentNum = 0;
  for (let currentNum = 1; currentNum <= n; currentNum++) {
    const squareNum = currentNum * currentNum;
    const stringNum = squareNum.toString();
    if (canPartitions(stringNum, currentNum)) {
      punishmentNum += squareNum;
    }
  }
  return punishmentNum;

  function canPartitions(stringNum, target) {
    if (stringNum.length === 0 && target === 0) {
      return true;
    }

    if (target < 0) {
      return false;
    }

    for (let currentIndex = 0; currentIndex < stringNum.length; currentIndex++) {
      const leftString = stringNum.substring(0, currentIndex + 1);
      const rightString = stringNum.substring(currentIndex + 1);
      const leftNum = Number(leftString);
      if (canPartitions(rightString, target - leftNum)) {
        return true;
      }
    }
    return false;
  }
};

var n = 10;
var expected = 182;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 37;
var expected = 1478;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 45;
var expected = 3503;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 756;
var expected = 2725885;
var result = punishmentNumber(n);
console.log(result, result === expected);

var n = 1000;
var expected = 10804657;
var result = punishmentNumber(n);
console.log(result, result === expected);
