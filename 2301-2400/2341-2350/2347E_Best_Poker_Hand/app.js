// 2347. Best Poker Hand
// https://leetcode.com/problems/best-poker-hand/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const uniqueSuits = new Set(suits);
  if (uniqueSuits.size === 1) return 'Flush';

  let maxCardCount = 0;
  const counts = new Array(14).fill(0);
  for (const rank of ranks) {
    counts[rank]++;
    maxCardCount = Math.max(maxCardCount, counts[rank]);
    if (maxCardCount > 2) return 'Three of a Kind';
  }

  if (maxCardCount === 2) return 'Pair';
  return 'High Card';
};

var ranks = [13, 2, 3, 1, 9],
  suits = ['a', 'a', 'a', 'a', 'a'];
var expected = 'Flush';
var result = bestHand(ranks, suits);
console.log(result, result === expected);

var ranks = [4, 4, 2, 4, 4],
  suits = ['d', 'a', 'a', 'b', 'c'];
var expected = 'Three of a Kind';
var result = bestHand(ranks, suits);
console.log(result, result === expected);

var ranks = [10, 10, 2, 12, 9],
  suits = ['a', 'b', 'c', 'a', 'd'];
var expected = 'Pair';
var result = bestHand(ranks, suits);
console.log(result, result === expected);

var ranks = [13, 12, 3, 4, 7],
  suits = ['a', 'd', 'c', 'b', 'c'];
var expected = 'High Card';
var result = bestHand(ranks, suits);
console.log(result, result === expected);

var ranks = [3, 3, 13, 7, 3],
  suits = ['a', 'd', 'd', 'd', 'c'];
var expected = 'Three of a Kind';
var result = bestHand(ranks, suits);
console.log(result, result === expected);
