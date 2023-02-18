// 202. Happy Number
// https://leetcode.com/problems/happy-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getNext(n) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) ** 2;
      n = (n / 10) | 0;
    }
    return sum;
  }

  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
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
