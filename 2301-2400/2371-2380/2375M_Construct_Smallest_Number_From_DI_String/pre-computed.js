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
  const patternLength = pattern.length;
  let maxSoFar = 0;
  let currMax = 0;

  // Array to store lengths of decreasing subsequences in the pattern
  const arrD = new Array(patternLength + 2).fill(0);

  // Compute the lengths of decreasing subsequences in the pattern
  for (let patternIndex = patternLength; patternIndex >= 0; patternIndex--) {
    // If 'D', increment the length of the decreasing sequence
    if (patternIndex < patternLength && pattern.charAt(patternIndex) === 'D')
      arrD[patternIndex] = arrD[patternIndex + 1] + 1;
  }

  // Build the result string based on the pattern
  for (let position = 0; position <= patternLength; position++) {
    if (position < patternLength && pattern.charAt(position) === 'I') {
      // If 'I', assign the next maximum digit and append it to the result
      maxSoFar++;
      result += maxSoFar;

      // Update the max digit encountered so far
      maxSoFar = Math.max(maxSoFar, currMax);

      // Reset current max for the next iteration
      currMax = 0;
    } else {
      // If 'D', calculate the appropriate digit and append it to the result
      const temp = 1 + maxSoFar + arrD[position];
      result += temp;

      // Update the current max value
      currMax = Math.max(currMax, temp);
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
