// 3457. Eat Pizzas!
// https://leetcode.com/problems/eat-pizzas/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} pizzas
 * @return {number}
 */
var maxWeight = function (pizzas) {
  let totalWeight = 0;
  const days = pizzas.length / 4;
  const oddDays = (days + 1) >> 1;
  pizzas.sort((a, b) => b - a);
  for (let i = 0, j = 0; i < days; i++, j++) {
    if (i >= oddDays) j++;
    totalWeight += pizzas[j];
  }
  return totalWeight;
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
