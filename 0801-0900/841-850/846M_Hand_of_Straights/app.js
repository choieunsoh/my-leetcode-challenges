// 846. Hand of Straights
// https://leetcode.com/problems/hand-of-straights/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  const n = hand.length;
  if (n % groupSize !== 0) return false;

  hand.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (hand[i] < 0) continue;
    if (!isValidStraightHand(i)) return false;
  }

  return true;

  function isValidStraightHand(i) {
    let nextCard = hand[i];
    let count = 0;
    while (i < n && count < groupSize) {
      if (hand[i] === nextCard) {
        count++;
        nextCard++;
        hand[i] *= -1;
      }
      i++;
    }
    return count === groupSize;
  }
};

var hand = [1, 2, 3, 6, 2, 3, 4, 7, 8],
  groupSize = 3;
var expected = true;
var result = isNStraightHand(hand, groupSize);
console.log(result, result === expected);

var hand = [1, 2, 3, 4, 5],
  groupSize = 4;
var expected = false;
var result = isNStraightHand(hand, groupSize);
console.log(result, result === expected);

var hand = [1, 1, 2, 2, 3, 3],
  groupSize = 3;
var expected = true;
var result = isNStraightHand(hand, groupSize);
console.log(result, result === expected);
