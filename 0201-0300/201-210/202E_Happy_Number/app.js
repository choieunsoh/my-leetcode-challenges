// 202. Happy Number
// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set();
  while (n > 3) {
    seen.add(n);

    let sum = 0;
    while (n > 0) {
      sum += (n % 10) ** 2;
      n = (n / 10) | 0;
    }
    n = sum;

    if (seen.has(n)) break;
  }

  return n === 1;
};

var n = 4;
var expected = false;
var result = isHappy(n);
console.log(result, result === expected);

var n = 19;
var expected = true;
var result = isHappy(n);
console.log(result, result === expected);

var n = 2;
var expected = false;
var result = isHappy(n);
console.log(result, result === expected);

var n = 7;
var expected = true;
var result = isHappy(n);
console.log(result, result === expected);
