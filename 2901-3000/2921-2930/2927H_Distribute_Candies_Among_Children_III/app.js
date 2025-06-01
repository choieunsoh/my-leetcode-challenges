// 2927. Distribute Candies Among Children III
// https://leetcode.com/problems/distribute-candies-among-children-iii/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  const N = BigInt(n + 2);
  const overLimit = BigInt(limit + 1);
  const validAllChildren = C2(N);
  const overLimitOneChild = 3n * C2(N - overLimit);
  const overLimitTwoChildren = 3n * C2(N - 2n * overLimit);
  const overLimitThreeChildren = C2(N - 3n * overLimit);
  return Number(validAllChildren - overLimitOneChild + overLimitTwoChildren - overLimitThreeChildren);

  function C2(n) {
    if (n < 0n) return 0n;
    return (n * (n - 1n)) / 2n;
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
