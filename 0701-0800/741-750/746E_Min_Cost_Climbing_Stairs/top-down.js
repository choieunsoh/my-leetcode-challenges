// https://leetcode.com/problems/min-cost-climbing-stairs/
// 746. Min Cost Climbing Stairs
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const minCostPerStep = Array(cost.length + 1);
  minCostPerStep[cost.length] = 0;
  for (let currentStep = cost.length - 1; currentStep >= 0; currentStep--) {
    const costCurrentStep = cost[currentStep];
    const costOneStep =
      costCurrentStep + (minCostPerStep[currentStep + 1] ?? 0);
    const costTwoSteps =
      costCurrentStep + (minCostPerStep[currentStep + 2] ?? 0);
    minCostPerStep[currentStep] = Math.min(costOneStep, costTwoSteps);
  }
  return Math.min(minCostPerStep[0], minCostPerStep[1]);
};

var cost = [10, 15, 20];
var expected = 15;
var actual = minCostClimbingStairs(cost);
console.log(actual, actual === expected);

var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
var expected = 6;
var actual = minCostClimbingStairs(cost);
console.log(actual, actual === expected);
