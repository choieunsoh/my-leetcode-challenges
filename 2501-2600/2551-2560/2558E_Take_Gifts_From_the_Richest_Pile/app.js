// 2558. Take Gifts From the Richest Pile
// https://leetcode.com/problems/take-gifts-from-the-richest-pile/
// T.C.: O(k * n)
// S.C.: O(1)
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  while (k--) {
    let max = 1;
    let index = 0;
    for (let i = 0; i < gifts.length; i++) {
      if (gifts[i] > max) {
        max = gifts[i];
        index = i;
      }
    }
    gifts[index] = Math.sqrt(gifts[index]) | 0;
  }
  return gifts.reduce((total, gift) => total + gift, 0);
};

var gifts = [25, 64, 9, 4, 100],
  k = 4;
var expected = 29;
var result = pickGifts(gifts, k);
console.log(result, result === expected);

var gifts = [1, 1, 1, 1],
  k = 4;
var expected = 4;
var result = pickGifts(gifts, k);
console.log(result, result === expected);
