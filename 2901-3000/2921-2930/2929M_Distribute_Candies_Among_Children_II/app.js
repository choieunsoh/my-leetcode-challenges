// 2929. Distribute Candies Among Children II
// https://leetcode.com/problems/distribute-candies-among-children-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let result = 0;
  for (let firstChild = 0; firstChild <= Math.min(n, limit); firstChild++) {
    if (n - firstChild > limit * 2) continue;
    const secondChild = Math.min(n - firstChild, limit);
    const thirdChild = Math.max(0, n - firstChild - limit);
    result += secondChild - thirdChild + 1;
  }
  return result;
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
