// 950. Reveal Cards In Increasing Order
// https://leetcode.com/problems/reveal-cards-in-increasing-order/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const queue = Array.from({ length: deck.length }, (_, i) => i);
  const result = new Array(deck.length);
  for (let i = 0; i < deck.length; i++) {
    result[queue.shift()] = deck[i];
    queue.push(queue.shift());
  }
  return result;
};

var deck = [17, 13, 11, 2, 3, 5, 7];
var expected = [2, 13, 3, 11, 5, 17, 7];
var result = deckRevealedIncreasing(deck);
console.log(result, result.join() === expected.join());

var deck = [1, 1000];
var expected = [1, 1000];
var result = deckRevealedIncreasing(deck);
console.log(result, result.join() === expected.join());
