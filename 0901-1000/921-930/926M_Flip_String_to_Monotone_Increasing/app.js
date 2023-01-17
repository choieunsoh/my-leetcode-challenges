// 926. Flip String to Monotone Increasing
// https://leetcode.com/problems/flip-string-to-monotone-increasing/
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  let result = 0;
  let oneCount = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (ch === '1') {
      oneCount++;
    } else {
      result = Math.min(oneCount, result + 1);
    }
  }

  return result;
};

var s = '00110';
var expected = 1;
var result = minFlipsMonoIncr(s);
console.log(result, result === expected);

var s = '010110';
var expected = 2;
var result = minFlipsMonoIncr(s);
console.log(result, result === expected);

var s = '00011000';
var expected = 2;
var result = minFlipsMonoIncr(s);
console.log(result, result === expected);
