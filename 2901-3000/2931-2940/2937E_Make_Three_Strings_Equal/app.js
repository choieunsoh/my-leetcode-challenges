// 2937. Make Three Strings Equal
// https://leetcode.com/problems/make-three-strings-equal/
// T.C.: O(s1+s2+s3)
// S.C.: O(1)
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
  let commonLength = 0;
  const totalLength = s1.length + s2.length + s3.length;
  const minLength = Math.min(s1.length, s2.length, s3.length);
  for (let i = 0; i < minLength; i++) {
    if (s1[i] === s2[i] && s2[i] === s3[i]) {
      commonLength++;
    } else {
      break;
    }
  }
  return commonLength === 0 ? -1 : totalLength - commonLength * 3;
};

var s1 = 'abc',
  s2 = 'abb',
  s3 = 'ab';
var expected = 2;
var result = findMinimumOperations(s1, s2, s3);
console.log(result, result === expected);

var s1 = 'dac',
  s2 = 'bac',
  s3 = 'cac';
var expected = -1;
var result = findMinimumOperations(s1, s2, s3);
console.log(result, result === expected);
