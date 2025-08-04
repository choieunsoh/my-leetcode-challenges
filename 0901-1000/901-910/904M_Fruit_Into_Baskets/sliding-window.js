// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const n = fruits.length;
  const basket = new Map();
  let left = 0;
  let right = 0;
  while (right < n) {
    basket.set(fruits[right], (basket.get(fruits[right]) ?? 0) + 1);
    if (basket.size > 2) {
      basket.set(fruits[left], basket.get(fruits[left]) - 1);
      if (basket.get(fruits[left]) === 0) {
        basket.delete(fruits[left]);
      }
      left++;
    }
    right++;
  }

  return right - left;
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
