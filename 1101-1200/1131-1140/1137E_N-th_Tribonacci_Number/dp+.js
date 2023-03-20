// 1137. N-th Tribonacci Number
// https://leetcode.com/problems/n-th-tribonacci-number/
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let [one, two, three] = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    [one, two, three] = [two, three, one + two + three];
  }
  return three;
};

var n = 4;
var expected = 4;
var result = tribonacci(n);
console.log(result, result === expected);

var n = 25;
var expected = 1389537;
var result = tribonacci(n);
console.log(result, result === expected);
