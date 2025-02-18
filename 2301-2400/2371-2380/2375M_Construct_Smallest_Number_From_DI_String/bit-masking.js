// 2375. Construct Smallest Number From DI String
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// T.C.: O(9^n)
// S.C.: O(n)
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  return String(findSmallestNumber(0, 0, 0));

  function findSmallestNumber(index, usedDigitsMask, currNum) {
    // Base case: return the current number when the whole pattern is processed
    if (index > pattern.length) return currNum;

    let result = Number.MAX_SAFE_INTEGER;
    let lastDigit = currNum % 10;
    const shouldIncrement = index === 0 || pattern.charAt(index - 1) === 'I';

    // Try all possible digits (1 to 9) that are not yet used and follow the pattern
    for (let currDigit = 1; currDigit <= 9; currDigit++) {
      const currUsedMask = (usedDigitsMask & (1 << currDigit)) !== 0;
      if (currUsedMask) continue;

      const greaterThanLastDigit = currDigit > lastDigit;
      if (greaterThanLastDigit !== shouldIncrement) continue;

      const nextUsedMask = usedDigitsMask | (1 << currDigit);
      const nextNum = currNum * 10 + currDigit;
      const smallestNum = findSmallestNumber(index + 1, nextUsedMask, nextNum);
      result = Math.min(result, smallestNum);
    }

    return result;
  }
};

var pattern = 'IIIDIDDD';
var expected = '123549876';
var result = smallestNumber(pattern);
console.log(result, result === expected);

var pattern = 'DDD';
var expected = '4321';
var result = smallestNumber(pattern);
console.log(result, result === expected);
