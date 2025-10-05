// 2928. Distribute Candies Among Children I
// https://leetcode.com/problems/distribute-candies-among-children-i/
// T.C.: O(limit^2)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
  let ways = 0;
  for (let child1 = 0; child1 <= limit; child1++) {
    for (let child2 = 0; child2 <= limit; child2++) {
      const child3 = n - child1 - child2;
      if (child3 >= 0 && child3 <= limit) {
        ways++;
      }
    }
  }
  return ways;
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
