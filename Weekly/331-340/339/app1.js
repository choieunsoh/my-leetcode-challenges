/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
  let zero = 0;
  let one = 0;
  let result = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const bit = s[i];
    if (bit === '0') {
      if (one > 0) {
        result = Math.max(result, 2 * Math.min(zero, one));
        zero = 0;
        one = 0;
      }
      zero++;
    } else {
      one++;
    }
  }
  result = Math.max(result, 2 * Math.min(zero, one));
  return result;
};

var s = '01000111';
var expected = 6;
var result = findTheLongestBalancedSubstring(s);
console.log(result, result === expected);

var s = '00111';
var expected = 4;
var result = findTheLongestBalancedSubstring(s);
console.log(result, result === expected);

var s = '111';
var expected = 0;
var result = findTheLongestBalancedSubstring(s);
console.log(result, result === expected);
