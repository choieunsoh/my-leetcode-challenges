var generate = function (numRows) {
  const dp = new Array(numRows).fill(0).map((o) => new Array(numRows).fill(0))
  const pascal = (n, c) => {
    if (c === n || c === 0 || n === 0) return 1
    if (c === 1) return n
    if (dp[n][c] !== 0) return dp[n][c]
    dp[n][c] = pascal(n - 1, c - 1) + pascal(n - 1, c)
    dp[n][n - c] = dp[n][c]
    return dp[n][c]
  }

  const result = []
  for (let n = 0; n < numRows; n++) {
    const row = []
    for (let c = 0; c <= n; c++) {
      row.push(pascal(n, c))
    }
    result.push(row)
  }
  return result
}
console.log(generate(5))
