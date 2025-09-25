// 3602. Hexadecimal and Hexatrigesimal Conversion
// https://leetcode.com/problems/hexadecimal-and-hexatrigesimal-conversion/description/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function (n) {
  const BASE16 = '0123456789ABCDEF';
  const BASE36 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const n2 = n * n;
  const n3 = n * n * n;
  const base16 = toString(n2, 16, BASE16);
  const base36 = toString(n3, 36, BASE36);
  return base16 + base36;

  function toString(num, base, digits) {
    let result = '';
    while (num > 0) {
      const index = num % base;
      result = digits[index] + result;
      num = (num / base) | 0;
    }
    return result;
  }
};

var n = 13;
var expected = 'A91P1';
var result = concatHex36(n);
console.log(result, result === expected);

var n = 36;
var expected = '5101000';
var result = concatHex36(n);
console.log(result, result === expected);
