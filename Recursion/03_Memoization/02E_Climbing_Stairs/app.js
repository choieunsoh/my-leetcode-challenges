// https://leetcode.com/problems/climbing-stairs/
// 70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = (n) => {
  const dp = new Array(n + 1).fill(0);

  function climb(n) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (dp[n] !== 0) return dp[n];

    const oneStep = climb(n - 1);
    const twoSteps = climb(n - 2);
    dp[n] = oneStep + twoSteps;

    return dp[n];
  }

  return climb(n);
};

for (let i = 2; i <= 10; i++) {
  console.log(i, climbStairs(i));
}
for (let i = 2; i <= 10; i++) {
  console.log(i * 10, climbStairs(i * 10));
}
