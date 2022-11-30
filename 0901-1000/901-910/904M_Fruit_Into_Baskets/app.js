// 904. Fruit Into Baskets
// https://leetcode.com/problems/fruit-into-baskets/
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let result = 0;
  let basketCount = 0;
  let lastBasketCount = 0;
  let firstBasket = -1;
  let lastBasket = -1;

  for (const fruit of fruits) {
    if (fruit === lastBasket) {
      basketCount++;
      lastBasketCount++;
    } else if (fruit === firstBasket) {
      basketCount++;
      lastBasketCount = 1;
      firstBasket = lastBasket;
      lastBasket = fruit;
    } else {
      basketCount = lastBasketCount + 1;
      lastBasketCount = 1;
      firstBasket = lastBasket;
      lastBasket = fruit;
    }

    result = Math.max(basketCount, result);
  }
  return result;
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
