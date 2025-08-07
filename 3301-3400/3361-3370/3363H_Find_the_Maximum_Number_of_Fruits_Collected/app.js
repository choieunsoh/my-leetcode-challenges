// 3363. Find the Maximum Number of Fruits Collected
// https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} fruits
 * @return {number}
 */
var maxCollectedFruits = function (fruits) {
  const n = fruits.length;
  let collected = 0;
  for (let i = 0; i < n; i++) {
    collected += fruits[i][i];
  }
  collected += dp(true);
  collected += dp(false);
  return collected;

  function dp(moveDown) {
    let prev = new Array(n).fill(Number.MIN_SAFE_INTEGER);
    prev[n - 1] = moveDown ? fruits[0][n - 1] : fruits[n - 1][0];

    for (let i = 1; i < n - 1; i++) {
      const curr = new Array(n).fill(Number.MIN_SAFE_INTEGER);
      for (let j = Math.max(n - 1 - i, i + 1); j < n; j++) {
        let best = prev[j];
        if (j - 1 >= 0) {
          best = Math.max(best, prev[j - 1]);
        }
        if (j + 1 < n) {
          best = Math.max(best, prev[j + 1]);
        }
        curr[j] = best + (moveDown ? fruits[i][j] : fruits[j][i]);
      }
      prev = curr;
    }
    return prev[n - 1];
  }
};

var fruits = [
  [1, 2, 3, 4],
  [5, 6, 8, 7],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
var expected = 100;
var result = maxCollectedFruits(fruits);
console.log(result, result === expected);

var fruits = [
  [1, 1],
  [1, 1],
];
var expected = 4;
var result = maxCollectedFruits(fruits);
console.log(result, result === expected);
