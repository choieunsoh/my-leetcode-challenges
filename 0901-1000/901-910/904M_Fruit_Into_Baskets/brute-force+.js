// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let maxPicked = 0;
  const n = fruits.length;

  for (let left = 0; left < n; left++) {
    const basket = new Set();
    let right = left;
    while (right < n) {
      if (!basket.has(fruits[right]) && basket.size === 2) {
        break;
      }
      basket.add(fruits[right]);
      right++;
    }
    maxPicked = Math.max(maxPicked, right - left);
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
