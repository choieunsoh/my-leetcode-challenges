// 869. Reordered Power of 2
// https://leetcode.com/problems/reordered-power-of-2/description/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const digits = countDigit(n);
  for (let i = 0; i < 31; i++) {
    const powerOf2Digits = countDigit(1 << i);
    if (digits === powerOf2Digits) {
      return true;
    }
  }
  return false;

  function countDigit(n) {
    const counts = new Array(10).fill(0);
    while (n) {
      counts[n % 10]++;
      n = (n / 10) | 0;
    }
    return counts.join(',');
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
