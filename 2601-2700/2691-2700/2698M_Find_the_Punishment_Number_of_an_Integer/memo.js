// 2698. Find the Punishment Number of an Integer
// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
// T.C.: O(n*2^(log_10(n)))
// S.C.: O(n*log_10(n)+log_10(n))
/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let punishmentNum = 0;
  for (let currentNum = 1; currentNum <= n; currentNum++) {
    const squareNum = currentNum * currentNum;
    const stringNum = squareNum.toString();
    const memo = Array.from({ length: stringNum.length }, () => new Array(currentNum + 1).fill(-1));
    if (findPartitions(0, 0, stringNum, currentNum, memo)) {
      punishmentNum += squareNum;
    }
  }
  return punishmentNum;

  function findPartitions(startIndex, currentSum, stringNum, target, memo) {
    if (startIndex === stringNum.length) {
      return currentSum === target;
    }

    if (currentSum > target) {
      return false;
    }

    if (memo[startIndex][currentSum] !== -1) {
      return memo[startIndex][currentSum];
    }

    let partitionFound = false;
    for (let currentIndex = startIndex; currentIndex < stringNum.length; currentIndex++) {
      const currentString = stringNum.substring(startIndex, currentIndex + 1);
      const addend = Number(currentString);

      // Recursively check if valid partition can be found
      partitionFound ||= findPartitions(currentIndex + 1, currentSum + addend, stringNum, target, memo);
      if (partitionFound) {
        memo[startIndex][currentSum] = 1;
        return true;
      }
    }

    // Memoize the result for future reference and return its result
    memo[startIndex][currentSum] = 0;
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
