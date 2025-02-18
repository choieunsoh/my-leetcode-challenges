// 2375. Construct Smallest Number From DI String
// https://leetcode.com/problems/construct-smallest-number-from-di-string/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let result = '';

  // Iterate through the pattern and build the result
  for (let currentIndex = 0, previousIndex = 0; currentIndex <= pattern.length; currentIndex++) {
    result += currentIndex + 1;

    // Reverse the substring starting from previousIndex when necessary
    if (currentIndex === pattern.length || pattern.charAt(currentIndex) === 'I') {
      result = result.substring(0, previousIndex) + reverseString(result.substring(previousIndex));
      previousIndex = currentIndex + 1;
    }
  }

  return result;

  function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
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
