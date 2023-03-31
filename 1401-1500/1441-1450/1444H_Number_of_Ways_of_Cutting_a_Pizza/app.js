// 1444. Number of Ways of Cutting a Pizza
// https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  const MOD = 1e9 + 7;
  const rows = pizza.length;
  const cols = pizza[0].length;
  const apples = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  const dp = Array.from({ length: k }, () => Array.from({ length: rows }, () => Array(cols).fill(0)));
  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      const apple = pizza[row][col] === 'A' ? 1 : 0;
      apples[row][col] = apple + apples[row + 1][col] + apples[row][col + 1] - apples[row + 1][col + 1];
      dp[0][row][col] = apples[row][col] > 0 ? 1 : 0;
    }
  }

  for (let remain = 1; remain < k; remain++) {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        for (let nextRow = row + 1; nextRow < rows; nextRow++) {
          if (apples[row][col] - apples[nextRow][col] > 0) {
            dp[remain][row][col] += dp[remain - 1][nextRow][col];
            dp[remain][row][col] %= MOD;
          }
        }

        for (let nextCol = col + 1; nextCol < cols; nextCol++) {
          if (apples[row][col] - apples[row][nextCol] > 0) {
            dp[remain][row][col] += dp[remain - 1][row][nextCol];
            dp[remain][row][col] %= MOD;
          }
        }
      }
    }
  }
  return dp[k - 1][0][0];
};

var pizza = ['A..', 'AAA', '...'],
  k = 3;
var expected = 3;
var result = ways(pizza, k);
console.log(result, result === expected);

var pizza = ['A..', 'AA.', '...'],
  k = 3;
var expected = 1;
var result = ways(pizza, k);
console.log(result, result === expected);

var pizza = ['A..', 'A..', '...'],
  k = 1;
var expected = 1;
var result = ways(pizza, k);
console.log(result, result === expected);
