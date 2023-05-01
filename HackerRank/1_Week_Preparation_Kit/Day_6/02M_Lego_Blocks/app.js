// Lego Blocks
// https://www.hackerrank.com/challenges/lego-blocks/problem
/*
 * Complete the 'legoBlocks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

function legoBlocks(n, m) {
  // Write your code here
  const MOD = 1e9 + 7;

  // Step 1: O(W)
  // The number of combinations to build a single row
  // As only four kinds of sizes, so
  // base case:
  // if width is 0, combination is 1
  // if width is 1, combination is 1
  // if width is 2, combination is 2
  // if width is 3, combination is 4
  const combinations = [1, 1, 2, 4];

  // Build row combinations up to current wall's width
  while (combinations.length <= m) {
    combinations.push(combinations.slice(combinations.length - 4).reduce((sum, num) => sum + num, 0));
  }

  // Step 2: O(W)
  // Compute total combinations
  // for constructing a wall of height N of varying widths
  const total = combinations.map((c) => Number(BigInt(Math.pow(c, n)) % BigInt(MOD)));

  // Step 3: Calculate the number of unstable wall configurations for a wall of height N of varying widths
  const unstable = [0, 0];
  for (let i = 2; i <= m; i++) {
    let sum_left_right_combinations = 0;
    for (let j = 1; j < i; j++) {
      const left_combinations = total[j] - unstable[j];
      const right_combinations = total[i - j];
      const left_right_combinations = (left_combinations * right_combinations) % MOD;
      sum_left_right_combinations = (sum_left_right_combinations + left_right_combinations) % MOD;
    }
    unstable.push(sum_left_right_combinations);
  }

  // Calculate the number of stable wall combinations and return it
  const num_stable_combinations = (total[m] - unstable[m] + MOD) % MOD;
  return num_stable_combinations;
}

var n = 2,
  m = 2;
var expected = 3;
var result = legoBlocks(n, m);
console.log(result, result === expected);

var n = 3,
  m = 2;
var expected = 7;
var result = legoBlocks(n, m);
console.log(result, result === expected);

var n = 2,
  m = 3;
var expected = 9;
var result = legoBlocks(n, m);
console.log(result, result === expected);

var n = 4,
  m = 4;
var expected = 3375;
var result = legoBlocks(n, m);
console.log(result, result === expected);
