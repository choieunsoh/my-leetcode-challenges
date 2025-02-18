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
  const numStack = [];

  // Iterate through the pattern
  for (let index = 0; index <= pattern.length; index++) {
    // Push the next number onto the stack
    numStack.push(index + 1);

    // If 'I' is encountered or we reach the end, pop all stack elements
    if (index === pattern.length || pattern.charAt(index) === 'I') {
      while (numStack.length > 0) {
        result += numStack.pop();
      }
    }
  }
  return result;
};

var pattern = 'IIIDIDDD';
var expected = '123549876';
var result = smallestNumber(pattern);
console.log(result, result === expected);

var pattern = 'DDD';
var expected = '4321';
var result = smallestNumber(pattern);
console.log(result, result === expected);
