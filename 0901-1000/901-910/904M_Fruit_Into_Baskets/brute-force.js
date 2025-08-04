// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let maxPicked = 0;
  const n = fruits.length;

  for (let left = 0; left < n; left++) {
    for (let right = 0; right < n; right++) {
      const basket = new Set();
      for (let i = left; i <= right; i++) {
        basket.add(fruits[i]);
      }
      if (basket.size <= 2) {
        maxPicked = Math.max(maxPicked, right - left + 1);
      }
    }
  }

  return maxPicked;
};

var fruits = [1, 2, 1];
var expected = 3;
var result = totalFruit(fruits);
console.log(result, expected, result === expected);

var fruits = [0, 1, 2, 2];
var expected = 3;
var result = totalFruit(fruits);
console.log(result, expected, result === expected);

var fruits = [1, 2, 3, 2, 2];
var expected = 4;
var result = totalFruit(fruits);
console.log(result, expected, result === expected);

var fruits = [0, 1, 2];
var expected = 2;
var result = totalFruit(fruits);
console.log(result, expected, result === expected);

var fruits = [0];
var expected = 1;
var result = totalFruit(fruits);
console.log(result, expected, result === expected);

var fruits = [0, 1, 1];
var expected = 3;
var result = totalFruit(fruits);
console.log(result, expected, result === expected);
