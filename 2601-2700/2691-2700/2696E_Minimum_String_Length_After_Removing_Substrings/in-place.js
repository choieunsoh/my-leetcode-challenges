// 2696. Minimum String Length After Removing Substrings
// https://leetcode.com/problems/minimum-string-length-after-removing-substrings/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  s = s.split('');
  let writeIndex = 0;
  for (let readIndex = 0; readIndex < s.length; readIndex++) {
    s[writeIndex] = s[readIndex];
    if (isAB(writeIndex) || isCD(writeIndex)) {
      writeIndex--;
    } else {
      writeIndex++;
    }
  }
  return writeIndex;

  function isAB(index) {
    return isValid(index, 'A', 'B');
  }

  function isCD(index) {
    return isValid(index, 'C', 'D');
  }

  function isValid(index, first, second) {
    return s[index] === second && index > 0 && s[index - 1] === first;
  }
};

var s = 'ABFCACDB';
var expected = 2;
var result = minLength(s);
console.log(result, result === expected);

var s = 'ACBBD';
var expected = 5;
var result = minLength(s);
console.log(result, result === expected);
