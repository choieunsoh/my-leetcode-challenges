// https://leetcode.com/problems/min-cost-climbing-stairs/
// 746. Min Cost Climbing Stairs
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let costFirstStep = cost[0];
  let costSecondStep = cost[1];
  for (let i = 2; i < cost.length; i++) {
    const costCurrentStep = cost[i] + Math.min(costFirstStep, costSecondStep);
    costFirstStep = costSecondStep;
    costSecondStep = costCurrentStep;
  }
  return Math.min(costFirstStep, costSecondStep);
};

var cost = [10, 15, 20];
var expected = 15;
var actual = minCostClimbingStairs(cost);
console.log(actual, actual === expected);

var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
var expected = 6;
var actual = minCostClimbingStairs(cost);
console.log(actual, actual === expected);
