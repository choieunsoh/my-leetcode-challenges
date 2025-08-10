// 869. Reordered Power of 2
// https://leetcode.com/problems/reordered-power-of-2/description/
// T.C.: O((log n)! * log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const digits = n.toString().split('');
  return permute(0);

  function permute(startIndex) {
    if (startIndex === digits.length) {
      if (isPowerOf2(Number(digits.join('')))) {
        return true;
      }
    }

    for (let i = startIndex; i < digits.length && digits[0] !== '0'; i++) {
      [digits[startIndex], digits[i]] = [digits[i], digits[startIndex]];
      if (permute(startIndex + 1)) {
        return true;
      }
      [digits[startIndex], digits[i]] = [digits[i], digits[startIndex]];
    }
    return false;
  }

  function isPowerOf2(n) {
    return (n & (n - 1)) === 0;
  }
};

var n = 1;
var expected = true;
var result = reorderedPowerOf2(n);
console.log(result, result === expected);

var n = 10;
var expected = false;
var result = reorderedPowerOf2(n);
console.log(result, result === expected);

var n = 46;
var expected = true;
var result = reorderedPowerOf2(n);
console.log(result, result === expected);

var n = 65;
var expected = false;
var result = reorderedPowerOf2(n);
console.log(result, result === expected);

var n = 4208;
var expected = true;
var result = reorderedPowerOf2(n);
console.log(result, result === expected);
