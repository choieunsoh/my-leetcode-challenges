// 1580. Put Boxes Into the Warehouse II
// https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/description/
// T.C.: O(m log m + n)
// S.C.: O(1)
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
  boxes.sort((a, b) => b - a);
  let left = 0;
  let right = warehouse.length - 1;
  let result = 0;
  for (let boxIndex = 0; boxIndex < boxes.length && left <= right; boxIndex++) {
    let boxHeight = boxes[boxIndex];
    if (boxHeight <= warehouse[left]) {
      left++;
      result++;
    } else if (boxHeight <= warehouse[right]) {
      right--;
      result++;
    }
  }
  return result;
};

var boxes = [1, 2, 2, 3, 4],
  warehouse = [3, 4, 1, 2];
var expected = 4;
var result = maxBoxesInWarehouse(boxes, warehouse);
console.log(result, result === expected);

var boxes = [3, 5, 5, 2],
  warehouse = [2, 1, 3, 4, 5];
var expected = 3;
var result = maxBoxesInWarehouse(boxes, warehouse);
console.log(result, result === expected);
