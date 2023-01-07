// 134. Gas Station
// https://leetcode.com/problems/gas-station/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }
  if (totalGas < totalCost) return -1;

  let start = 0;
  let currentGas = 0;
  for (let i = 0; i < gas.length; i++) {
    currentGas += gas[i] - cost[i];
    if (currentGas < 0) {
      start = i + 1;
      currentGas = 0;
    }
  }
  return start;
};

var gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
var expected = 3;
var result = canCompleteCircuit(gas, cost);
console.log(result, result === expected);

var gas = [2, 3, 4],
  cost = [3, 4, 3];
var expected = -1;
var result = canCompleteCircuit(gas, cost);
console.log(result, result === expected);
