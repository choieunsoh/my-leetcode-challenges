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
  let k = 0;
  while (num) {
    num = (num / 10) | 0;
    k++;
  }

  num = n;
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
