// 1823. Find the Winner of the Circular Game
// https://leetcode.com/problems/find-the-winner-of-the-circular-game/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let index = -1;
  const friends = Array.from({ length: n }, (_, i) => i + 1);
  while (friends.length > 1) {
    index = (index + k) % friends.length;
    friends.splice(index--, 1);
  }

  return friends[0];
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
