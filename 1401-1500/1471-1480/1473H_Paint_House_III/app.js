// 1473. Paint House III
// https://leetcode.com/problems/paint-house-iii/
// Here, M is the number of houses,
// N is the number of colors and
// T is the number of target neighborhoods.
// T.C.: O(M * T * N^2)
// S.C.: O(T * N)
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function (houses, cost, m, n, target) {
  // Maximum cost possible plus 1
  const MAX_COST = 1000001;

  // Initialize prevMemo array
  let prevMemo = Array.from({ length: target + 1 }, () => new Array(n).fill(MAX_COST));

  // Initialize for house 0, neighborhood will be 1
  for (let color = 1; color <= n; color++) {
    if (houses[0] === color) {
      // If the house has same color, no cost
      prevMemo[1][color - 1] = 0;
    } else if (houses[0] === 0) {
      // If the house is not painted, assign the corresponding cost
      prevMemo[1][color - 1] = cost[0][color - 1];
    }
  }

  for (let house = 1; house < m; house++) {
    // Initialize memo array
    let memo = Array.from({ length: target + 1 }, () => new Array(n).fill(MAX_COST));

    for (let neighborhoods = 1; neighborhoods <= Math.min(target, house + 1); neighborhoods++) {
      for (let color = 1; color <= n; color++) {
        // If the house is already painted, and color is different
        if (houses[house] !== 0 && color !== houses[house]) {
          // Cannot be painted with different color
          continue;
        }

        let currCost = MAX_COST;
        // Iterate over all the possible color for previous house
        for (let prevColor = 1; prevColor <= n; prevColor++) {
          if (prevColor != color) {
            // Decrement the neighborhood as adjacent houses has different color
            currCost = Math.min(currCost, prevMemo[neighborhoods - 1][prevColor - 1]);
          } else {
            // Previous house has the same color, no change in neighborhood count
            currCost = Math.min(currCost, prevMemo[neighborhoods][color - 1]);
          }
        }

        // If the house is already painted cost to paint is 0
        const costToPaint = houses[house] != 0 ? 0 : cost[house][color - 1];
        memo[neighborhoods][color - 1] = currCost + costToPaint;
      }
    }
    // Update the table to have the current house results
    prevMemo = memo;
  }

  let minCost = MAX_COST;
  // Find the minimum cost with m houses and target neighborhoods
  // By comparing cost for different color for the last house
  for (let color = 1; color <= n; color++) {
    minCost = Math.min(minCost, prevMemo[target][color - 1]);
  }

  // Return -1 if the answer is MAX_COST as it implies no answer possible
  return minCost == MAX_COST ? -1 : minCost;
};

var houses = [0, 0, 0, 0, 0],
  cost = [
    [1, 10],
    [10, 1],
    [10, 1],
    [1, 10],
    [5, 1],
  ],
  m = 5,
  n = 2,
  target = 3;
var expected = 9;
var result = minCost(houses, cost, m, n, target);
console.log(result, result === expected);

var houses = [0, 2, 1, 2, 0],
  cost = [
    [1, 10],
    [10, 1],
    [10, 1],
    [1, 10],
    [5, 1],
  ],
  m = 5,
  n = 2,
  target = 3;
var expected = 11;
var result = minCost(houses, cost, m, n, target);
console.log(result, result === expected);

var houses = [3, 1, 2, 3],
  cost = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  m = 4,
  n = 3,
  target = 3;
var expected = -1;
var result = minCost(houses, cost, m, n, target);
console.log(result, result === expected);
