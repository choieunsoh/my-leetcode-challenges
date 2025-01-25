// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; n > 0 && i < flowerbed.length; i++) {
    const left = flowerbed[i - 1] ?? 0;
    const right = flowerbed[i + 1] ?? 0;
    if (flowerbed[i] + left + right === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n === 0;
};

var flowerbed = [1, 0, 0, 0, 1],
  n = 1;
var expected = true;
var actual = canPlaceFlowers(flowerbed, n);
console.log(actual, actual === expected);

var flowerbed = [1, 0, 0, 0, 1],
  n = 2;
var expected = false;
var actual = canPlaceFlowers(flowerbed, n);
console.log(actual, actual === expected);
