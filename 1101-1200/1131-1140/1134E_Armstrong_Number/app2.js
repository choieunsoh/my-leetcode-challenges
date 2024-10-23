// 1134. Armstrong Number
// https://leetcode.com/problems/armstrong-number/description/
// T.C.: O()
// S.C.: O()
/**
 * @param {number} n
 * @return {boolean}
 */
var isArmstrong = function (n) {
  let sum = 0;
  let num = n;
  const k = (Math.log10(n) | 0) + 1;
  while (num) {
    const digit = num % 10;
    sum += digit ** k;
    num = (num / 10) | 0;
  }
  return sum === n;
};

var n = 153;
var expected = true;
var result = isArmstrong(n);
console.log(result, result === expected);

var n = 123;
var expected = false;
var result = isArmstrong(n);
console.log(result, result === expected);
