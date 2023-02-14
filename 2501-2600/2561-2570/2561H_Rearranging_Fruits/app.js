// 2561. Rearranging Fruits
// https://leetcode.com/problems/rearranging-fruits/
/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
  const diffMap = new Map();
  let min = Number.MAX_VALUE;
  for (let i = 0; i < basket1.length; i++) {
    diffMap.set(basket1[i], (diffMap.get(basket1[i]) ?? 0) + 1);
    diffMap.set(basket2[i], (diffMap.get(basket2[i]) ?? 0) - 1);
    min = Math.min(min, basket1[i], basket2[i]);
  }

  const swaps = [];
  for (const [num, count] of diffMap) {
    if (count % 2) return -1;
    for (let i = 0; i < Math.abs(count) / 2; i++) {
      swaps.push(num);
    }
  }
  swaps.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0; i < swaps.length / 2; i++) {
    result += Math.min(swaps[i], min * 2);
  }
  return result;
};

var basket1 = [4, 2, 2, 2],
  basket2 = [1, 4, 1, 2];
var expected = 1;
var result = minCost(basket1, basket2);
console.log(result, result === expected);

var basket1 = [2, 3, 4, 1],
  basket2 = [3, 2, 5, 1];
var expected = -1;
var result = minCost(basket1, basket2);
console.log(result, result === expected);

var basket1 = [8, 8, 8],
  basket2 = [5, 5, 8];
var expected = 5;
var result = minCost(basket1, basket2);
console.log(result, result === expected);
