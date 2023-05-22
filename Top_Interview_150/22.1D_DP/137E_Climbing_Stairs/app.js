// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 0) return 1;
  if (n < 3) return n;
  let one = 1;
  let two = 2;
  for (let i = 3; i <= n; i++) {
    [one, two] = [two, one + two];
  }
  return two;
};

var n = 2;
var expected = 2;
var result = climbStairs(n);
console.log(result, result === expected);

var n = 3;
var expected = 3;
var result = climbStairs(n);
console.log(result, result === expected);

var n = 45;
var expected = 1836311903;
var result = climbStairs(n);
console.log(result, result === expected);

for (let i = 2; i <= 10; i++) {
  console.log(i, climbStairs(i));
}
for (let i = 2; i <= 10; i++) {
  console.log(i * 10, climbStairs(i * 10));
}
