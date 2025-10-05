// 2960. Count Tested Devices After Test Operations
// https://leetcode.com/problems/count-tested-devices-after-test-operations/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
  let tested = 0;
  for (const battery of batteryPercentages) {
    if (battery - tested > 0) {
      tested++;
    }
  }
  return tested;
};

var batteryPercentages = [1, 1, 2, 1, 3];
var expected = 3;
var result = countTestedDevices(batteryPercentages);
console.log(result, result === expected);

var batteryPercentages = [0, 1, 2];
var expected = 2;
var result = countTestedDevices(batteryPercentages);
console.log(result, result === expected);
