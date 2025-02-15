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
    if (canPartition(squareNum, currentNum)) {
      punishmentNum += squareNum;
    }
  }
  return punishmentNum;

  function canPartition(num, target) {
    if (target < 0 || num < target) {
      return false;
    }

    if (num === target) {
      return true;
    }

    // Recursively check all partitions for a valid partition
    return (
      canPartition((num / 10) | 0, target - (num % 10)) ||
      canPartition((num / 100) | 0, target - (num % 100)) ||
      canPartition((num / 1000) | 0, target - (num % 1000))
    );
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
return;
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
