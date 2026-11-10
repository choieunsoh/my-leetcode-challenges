// 3693. Climbing Stairs II
// https://leetcode.com/problems/climbing-stairs-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function (n, costs) {
  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 0; i < n; i++) {
    const nxt = Math.min(a + 9, b + 4, c + 1) + costs[i];
    a = b;
    b = c;
    c = nxt;
  }
  return c;
};

var n = 4,
  costs = [1, 2, 3, 4];
var expected = 13;
var result = climbStairs(n, costs);
console.log(result, result === expected);

var n = 4,
  costs = [5, 1, 6, 2];
var expected = 11;
var result = climbStairs(n, costs);
console.log(result, result === expected);

var n = 3,
  costs = [9, 8, 3];
var expected = 12;
var result = climbStairs(n, costs);
console.log(result, result === expected);
