// 276. Paint Fence
// https://leetcode.com/problems/paint-fence/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
  const totalWays = new Array(n + 1).fill(0);
  totalWays[1] = k;
  totalWays[2] = k * k;
  for (let i = 3; i <= n; i++) {
    totalWays[i] = (k - 1) * (totalWays[i - 1] + totalWays[i - 2]);
  }
  return totalWays[n];
};

var n = 3,
  k = 2;
var expected = 6;
var result = numWays(n, k);
console.log(result, result === expected);

var n = 1,
  k = 1;
var expected = 1;
var result = numWays(n, k);
console.log(result, result === expected);

var n = 7,
  k = 2;
var expected = 42;
var result = numWays(n, k);
console.log(result, result === expected);
