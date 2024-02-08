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
  const memo = new Array(n);
  return totalWays(n, k, memo);

  function totalWays(i, k, memo) {
    if (i === 1) return k;
    if (i === 2) return k * k;

    if (memo[i] !== undefined) return memo[i];

    const paintDifferentColor = (k - 1) * totalWays(i - 1, k, memo);
    const paintSameColor = (k - 1) * totalWays(i - 2, k, memo);
    const ways = paintDifferentColor + paintSameColor;
    return (memo[i] = ways);
  }
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
