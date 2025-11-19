// 507. Perfect Number
// https://leetcode.com/problems/perfect-number/description/
// T.C.: O(sqrt(n))
// S.C.: O(1)
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let sum = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i * i !== num) {
        sum += num / i;
      }
    }
  }
  return sum - num === num;
};

var num = 28;
var expected = true;
var result = checkPerfectNumber(num);
console.log(result, result === expected);

var num = 7;
var expected = false;
var result = checkPerfectNumber(num);
console.log(result, result === expected);
