// 2698. Find the Punishment Number of an Integer
// https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
/**
 * @param {number} n
 * @return {number}
 */
function punishmentNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    const square = i * i;
    const isValid = findSumVariations(square, i);
    if (isValid) {
      sum += square;
    }
  }

  return sum;

  function findSumVariations(num, target) {
    const numStr = num.toString();
    const variations = [];
    backtrack(0, [], 0);
    return variations.length > 0;

    function backtrack(start, path, currSum) {
      if (currSum === target && start === numStr.length) {
        variations.push([...path]);
        return;
      }

      for (let i = start + 1; i <= numStr.length; i++) {
        const substring = numStr.slice(start, i);
        const substringSum = Number(substring);
        if (substringSum > target) break;

        backtrack(i, [...path, substring], currSum + substringSum);
      }
    }
  }
}

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
