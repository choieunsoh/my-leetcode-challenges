// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers/
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let i = 0;
  while (i < flowerbed.length && n > 0) {
    const current = flowerbed[i];
    const left = flowerbed[i - 1] ?? 0;
    const right = flowerbed[i + 1] ?? 0;
    if (current + left + right === 0) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }
  return n === 0;
};

var flowerbed = [1, 0, 0, 0, 1],
  n = 1;
var expected = true;
var result = canPlaceFlowers(flowerbed, n);
console.log(result, result === expected);

var flowerbed = [1, 0, 0, 0, 1],
  n = 2;
var expected = false;
var result = canPlaceFlowers(flowerbed, n);
console.log(result, result === expected);

var flowerbed = [0, 0, 1, 0, 0],
  n = 1;
var expected = true;
var result = canPlaceFlowers(flowerbed, n);
console.log(result, result === expected);
