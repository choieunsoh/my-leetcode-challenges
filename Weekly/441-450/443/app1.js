/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
  const result = [];
  let minCost = Infinity;
  for (let i = 0; i < cost.length; i++) {
    if (cost[i] < minCost) {
      minCost = cost[i];
    }
    result[i] = minCost;
  }
  return result;
};

var cost = [5, 3, 4, 1, 3, 2];
var expected = [5, 3, 3, 1, 1, 1];
var result = minCosts(cost);
console.log(result, result.join() === expected.join());

var cost = [1, 2, 4, 6, 7];
var expected = [1, 1, 1, 1, 1];
var result = minCosts(cost);
console.log(result, result.join() === expected.join());
