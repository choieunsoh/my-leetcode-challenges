// 1823. Find the Winner of the Circular Game
// https://leetcode.com/problems/find-the-winner-of-the-circular-game/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let index = 0;
  for (let friends = 2; friends <= n; friends++) {
    index = (index + k) % friends;
  }
  return index + 1;
};

var n = 5,
  k = 2;
var expected = 3;
var result = findTheWinner(n, k);
console.log(result, result === expected);

var n = 6,
  k = 5;
var expected = 1;
var result = findTheWinner(n, k);
console.log(result, result === expected);
