// climbingStairs
// LC-70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
function climbingStairs(n) {
  if (n < 3) return n;
  let one = 1;
  let two = 2;
  for (let i = 3; i <= n; i++) {
    [one, two] = [two, one + two];
  }
  return two;
}

var n = 1;
var expected = 1;
var result = climbingStairs(n);
console.log(result, result === expected);

var n = 2;
var expected = 2;
var result = climbingStairs(n);
console.log(result, result === expected);

var n = 26;
var expected = 196418;
var result = climbingStairs(n);
console.log(result, result === expected);

var n = 42;
var expected = 433494437;
var result = climbingStairs(n);
console.log(result, result === expected);
