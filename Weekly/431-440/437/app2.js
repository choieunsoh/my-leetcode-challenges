/**
 * @param {number[]} pizzas
 * @return {number}
 */
var maxWeight = function (pizzas) {
  return 0;
};

var pizzas = [1, 2, 3, 4, 5, 6, 7, 8];
var expected = 14;
var result = maxWeight(pizzas);
console.log(result, result === expected);

var pizzas = [2, 1, 1, 1, 1, 1, 1, 1];
var expected = 3;
var result = maxWeight(pizzas);
console.log(result, result === expected);

var pizzas = [4, 2, 1, 5, 2, 5, 5, 4, 2, 3, 2, 1];
var expected = 14;
var result = maxWeight(pizzas);
console.log(result, result === expected);

var pizzas = [2, 4, 4, 1, 1, 4, 5, 4, 1, 5, 3, 1, 5, 4, 5, 2];
var expected = 19;
var result = maxWeight(pizzas);
console.log(result, result === expected);
