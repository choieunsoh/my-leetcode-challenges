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
    console.log(n, "Step 1", n - 1, oneStep);
    const twoSteps = climb(n - 2);
    console.log(n, "Step 2", n - 2, twoSteps);
    dp[n] = oneStep + twoSteps;
    console.log(n, dp[n]);

    return dp[n];
  };

  return climb(n);
};

var n = 6;
console.log(climbStairs(n));
