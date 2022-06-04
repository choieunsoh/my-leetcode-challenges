// https://leetcode.com/problems/climbing-stairs/
// 70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = (n) => {
  const dp = new Array(n + 1).fill(0);
  const climb = (n) => {
    if (n < 0) {
      return 0;
    }
    if (n === 0) {
      return 1;
    }

    if (dp[n] !== 0) {
      return dp[n];
    }

    const oneStep = climb(n - 1);
    const twoSteps = climb(n - 2);
    dp[n] = oneStep + twoSteps;

    return dp[n];
  };

  return climb(n);
};

console.log(2, climbStairs(2));
console.log(3, climbStairs(3));
console.log(5, climbStairs(5));
console.log(10, climbStairs(10));
console.log(100, climbStairs(100));
