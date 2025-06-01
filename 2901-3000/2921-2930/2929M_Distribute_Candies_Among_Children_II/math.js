// 2929. Distribute Candies Among Children II
// https://leetcode.com/problems/distribute-candies-among-children-ii/description/
// The stars and bars combinatorial method
// You have 3 children (so, 3 "bins" to put candies in).
// The formula for distributing n identical items into k bins (allowing empty bins) is:
// C(n + k - 1, k - 1)
// Here, k = 3 (children), so k - 1 = 2.
// C(n, k) = n! / (k! * (n - k)!)
// This counts the number of ways to put 2 dividers among x items.
// C(x, 2) = x * (x - 1) / 2
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  // n + 2 means allow 2 empty bins
  const N = n + 2;
  const overLimit = limit + 1;
  const validCount = C2(N) + 3 * C2(N - 2 * overLimit);
  const invalidCount = 3 * C2(N - overLimit) + C2(N - 3 * overLimit);
  return validCount - invalidCount;

  // C(n + k - 1, k - 1)
  // k = 3
  function C2(x) {
    if (x < 0) return 0;
    return (x * (x - 1)) / 2;
  }
};

var n = 5,
  limit = 2;
var expected = 3;
var result = distributeCandies(n, limit);
console.log(result, result === expected);

var n = 3,
  limit = 3;
var expected = 10;
var result = distributeCandies(n, limit);
console.log(result, result === expected);
