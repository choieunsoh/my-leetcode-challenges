// 1710. Maximum Units on a Truck
// https://leetcode.com/problems/maximum-units-on-a-truck/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let result = 0;
  for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
    const boxes = Math.min(numberOfBoxes, truckSize);
    result += boxes * numberOfUnitsPerBox;
    truckSize -= boxes;
    if (truckSize === 0) break;
  }
  return result;
};

var boxTypes = [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  truckSize = 4;
var expected = 8;
var result = maximumUnits(boxTypes, truckSize);
console.log(result, result === expected);

var boxTypes = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  truckSize = 10;
var expected = 91;
var result = maximumUnits(boxTypes, truckSize);
console.log(result, result === expected);
