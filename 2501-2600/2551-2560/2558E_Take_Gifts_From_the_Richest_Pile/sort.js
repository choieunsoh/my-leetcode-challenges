// 2558. Take Gifts From the Richest Pile
// https://leetcode.com/problems/take-gifts-from-the-richest-pile/
// T.C.: O(k * (n + log n))
// S.C.: O(n)
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
  gifts.sort((a, b) => a - b);
  for (let i = 0; i < k; i++) {
    const newGift = (gifts.pop() ** 0.5) | 0;
    const index = binarySearch(gifts, newGift);
    gifts.splice(index, 0, newGift);
  }
  return gifts.reduce((total, gift) => total + gift, 0);

  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
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
