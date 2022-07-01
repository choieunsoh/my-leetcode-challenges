// https://leetcode.com/problems/climbing-stairs/
// 70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1 || n == 0) return 1; // our base cases

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    const third = first + second;
    first = second;
    second = third;
  }

  return second;
};

for (let i = 2; i <= 10; i++) {
  console.log(i, climbStairs(i));
}
for (let i = 2; i <= 10; i++) {
  console.log(i * 10, climbStairs(i * 10));
}
