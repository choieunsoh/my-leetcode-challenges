// 1564. Put Boxes Into the Warehouse I
// https://leetcode.com/problems/put-boxes-into-the-warehouse-i/description/
// T.C.: O(m log m + n)
// S.C.: O(1)
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
  boxes.sort((a, b) => b - a);
  let boxIndex = 0;
  let result = 0;
  for (const height of warehouse) {
    while (boxIndex < boxes.length && boxes[boxIndex] > height) {
      boxIndex++;
    }
    result++;
    boxIndex++;
    if (boxIndex === boxes.length) break;
  }
  return result;
};

var boxes = [4, 3, 4, 1],
  warehouse = [5, 3, 3, 4, 1];
var expected = 3;
var result = maxBoxesInWarehouse(boxes, warehouse);
console.log(result, result === expected);

var boxes = [1, 2, 2, 3, 4],
  warehouse = [3, 4, 1, 2];
var expected = 3;
var result = maxBoxesInWarehouse(boxes, warehouse);
console.log(result, result === expected);

var boxes = [1, 2, 3],
  warehouse = [1, 2, 3, 4];
var expected = 1;
var result = maxBoxesInWarehouse(boxes, warehouse);
console.log(result, result === expected);
