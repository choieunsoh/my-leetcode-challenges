// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const n = fruits.length;
  const basket = new Map();
  let maxPicked = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    basket.set(fruits[right], (basket.get(fruits[right]) ?? 0) + 1);
    while (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }
      left++;
    }
    maxPicked = Math.max(maxPicked, right - left + 1);
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
