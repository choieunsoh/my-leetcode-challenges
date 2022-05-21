// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  }

  let sign = x < 0 ? -1 : 1;
  x *= sign;
  let result = 0;
  while (x > 0) {
    let a = x % 10;
    result = result * 10 + a;
    x = Math.floor(x / 10);
  }
  result *= sign;
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return result;
  }
};

let x = 2147483648;
console.log(Math.pow(2, 31));
console.log(x, reverse(x));

x = 1234;
console.log(x, reverse(x));

x = -1234;
console.log(x, reverse(x));

x = 120;
console.log(x, reverse(x));
