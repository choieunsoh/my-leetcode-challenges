// 2561. Rearranging Fruits
// https://leetcode.com/problems/rearranging-fruits/
/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
var minCost = function (basket1, basket2) {
  const [map1, map2] = [new Map(), new Map()];
  let minVal = Number.MAX_SAFE_INTEGER;
  for (const val of basket1) {
    if (!map1.has(val)) map1.set(val, 0);
    map1.set(val, map1.get(val) + 1);
    minVal = Math.min(minVal, val);
  }
  for (const val of basket2) {
    if (!map2.has(val)) map2.set(val, 0);
    map2.set(val, map2.get(val) + 1);
    minVal = Math.min(minVal, val);
  }

  const [swapList1, swapList2] = [[], []];
  for (const [key, c1] of map1.entries()) {
    const c2 = map2.get(key) || 0;
    if ((c1 + c2) & 1) return -1;
    if (c1 > c2) {
      let addCnt = (c1 - c2) >> 1;
      while (addCnt--) {
        swapList1.push(key);
      }
    }
  }
  for (const [key, c2] of map2.entries()) {
    const c1 = map1.get(key) || 0;
    if ((c1 + c2) & 1) return -1;
    if (c2 > c1) {
      let addCnt = (c2 - c1) >> 1;
      while (addCnt--) {
        swapList2.push(key);
      }
    }
  }

  swapList1.sort((a, b) => a - b);
  swapList2.sort((a, b) => b - a);
  const n = swapList1.length;

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.min(2 * minVal, swapList1[i], swapList2[i]);
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
