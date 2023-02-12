// 2558. Take Gifts From the Richest Pile
// https://leetcode.com/problems/take-gifts-from-the-richest-pile/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  const pq = new MaxPriorityQueue();
  for (const gift of gifts) {
    pq.enqueue(gift);
  }

  for (let i = 0; i < k; i++) {
    const gift = Math.sqrt(pq.dequeue()) | 0;
    pq.enqueue(gift);
  }

  return pq.toArray().reduce((total, gift) => total + gift, 0);
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
