// 134. Gas Station
// https://leetcode.com/problems/gas-station/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const N = gas.length;
  let start = 0;
  let currentGas = 0;
  for (let i = 0; i < 2 * N; i++) {
    const index = i % N;
    currentGas += gas[index];
    currentGas -= cost[index];
    if (currentGas < 0) {
      start = i + 1;
      currentGas = 0;
    }
    if (i - start === N) {
      return start % N;
    }
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
