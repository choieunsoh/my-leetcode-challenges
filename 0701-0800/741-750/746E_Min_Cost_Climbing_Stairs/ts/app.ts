// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/
var minCostClimbingStairs = function (costs: number[]): number {
  let [costOneStep, costTwoSteps] = costs;
  for (let i = 2; i < costs.length; i++) {
    const currentCost = costs[i] + Math.min(costOneStep, costTwoSteps);
    costOneStep = costTwoSteps;
    costTwoSteps = currentCost;
  }
  return Math.min(costOneStep, costTwoSteps);
};

var cost = [10, 15, 20];
var expected = 15;
var actual = minCostClimbingStairs(cost);
console.log(actual, actual === expected);

var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
var expected = 6;
var actual = minCostClimbingStairs(cost);
console.log(actual, actual === expected);
