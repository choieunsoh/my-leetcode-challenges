// 134. Gas Station
// https://leetcode.com/problems/gas-station/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const n = gas.length;
  let currGas = 0;
  let startIndex = 0;
  for (let i = 0; i < 2 * n; i++) {
    const currIndex = i % n;
    currGas += gas[currIndex] - cost[currIndex];
    if (currGas < 0) {
      startIndex = i + 1;
      currGas = 0;
    }
    if (i - startIndex === n) return startIndex % n;
  }
  return -1;
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
