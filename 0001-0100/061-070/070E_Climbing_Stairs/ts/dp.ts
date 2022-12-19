// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
var climbStairs = function (n: number): number {
  if (n < 2) return 1;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }
  return second;
};

var n = 2;
var expected = 2;
var result = climbStairs(n);
console.log(result, result === expected);

var n = 3;
var expected = 3;
var result = climbStairs(n);
console.log(result, result === expected);

for (let i = 2; i <= 10; i++) {
  console.log(i, climbStairs(i));
}
