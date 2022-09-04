// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
// 914. X of a Kind in a Deck of Cards
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length === 1) return false;
  const groups = new Map();
  for (let i = 0; i < deck.length; i++) {
    const count = groups.get(deck[i]) ?? 0;
    groups.set(deck[i], count + 1);
  }

  let result = 0;
  for (const num of groups.values()) {
    result = gcd(result, num);
  }

  return result >= 2;

  function gcd(a, b) {
    return a === 0 ? b : gcd(b % a, a);
  }
};

var deck = [1, 2, 3, 4, 4, 3, 2, 1];
var expected = true;
var result = hasGroupsSizeX(deck);
console.log(result, result === expected);

var deck = [1, 1, 1, 2, 2, 2, 3, 3];
var expected = false;
var result = hasGroupsSizeX(deck);
console.log(result, result === expected);

var deck = [1];
var expected = false;
var result = hasGroupsSizeX(deck);
console.log(result, result === expected);

var deck = [1, 1, 1, 1, 2, 2];
var expected = true;
var result = hasGroupsSizeX(deck);
console.log(result, result === expected);
