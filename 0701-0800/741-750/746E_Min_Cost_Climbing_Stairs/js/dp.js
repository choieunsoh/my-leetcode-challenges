// 746. Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let [costFirstStep, costSecondStep] = cost;
  for (let i = 2; i < cost.length; i++) {
    const costCurrentStep = cost[i] + Math.min(costFirstStep, costSecondStep);
    [costFirstStep, costSecondStep] = [costSecondStep, costCurrentStep];
  }
  return Math.min(costFirstStep, costSecondStep);
};

var cost = [10, 15, 20];
var expected = 15;
var result = minCostClimbingStairs(cost);
console.log(result, result === expected);

var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
var expected = 6;
var result = minCostClimbingStairs(cost);
console.log(result, result === expected);
