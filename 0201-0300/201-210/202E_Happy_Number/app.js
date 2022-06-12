// https://leetcode.com/problems/happy-number/
// 202. Happy Number
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
      n = Math.floor(n / 10);
    }
    n = sum;

    if (seen.has(n)) break;
  }

  return n === 1;
};

var n = 4;
var expected = false;
console.log(isHappy(n), expected);
return;
var n = 19;
var expected = true;
console.log(isHappy(n), expected);

var n = 2;
var expected = false;
console.log(isHappy(n), expected);

var n = 7;
var expected = true;
console.log(isHappy(n), expected);
