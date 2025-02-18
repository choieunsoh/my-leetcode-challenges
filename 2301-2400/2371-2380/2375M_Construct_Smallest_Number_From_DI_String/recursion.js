// 2375. Construct Smallest Number From DI String
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let result = '';

  // Start building the sequence by calling the helper function
  buildSequence(0, 0);

  // Reverse the final result
  return reverseString(result);

  function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  function buildSequence(currentIndex, currentCount) {
    if (currentIndex !== pattern.length) {
      if (pattern[currentIndex] === 'I') {
        // If 'I', increment the count and move to the next index
        buildSequence(currentIndex + 1, currentIndex + 1);
      } else {
        // If 'D', keep the count and move to the next index
        currentCount = buildSequence(currentIndex + 1, currentCount);
      }
    }

    result += currentCount + 1;

    // Return the next count for the sequence
    return currentCount + 1;
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
