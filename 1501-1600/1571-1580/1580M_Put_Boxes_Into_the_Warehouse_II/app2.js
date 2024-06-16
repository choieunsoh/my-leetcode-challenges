// 1580. Put Boxes Into the Warehouse II
// https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/description/
// T.C.: O(m log m + n log n)
// S.C.: O(m)
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
  const roomHeights = [];
  let minHeight = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < warehouse.length; i++) {
    minHeight = Math.min(minHeight, warehouse[i]);
    roomHeights.push(minHeight);
  }

  minHeight = Number.MAX_SAFE_INTEGER;
  for (let i = warehouse.length - 1; i >= 0; i--) {
    minHeight = Math.min(minHeight, warehouse[i]);
    roomHeights[i] = Math.max(roomHeights[i], minHeight);
  }

  boxes.sort((a, b) => a - b);
  roomHeights.sort((a, b) => a - b);

  let result = 0;
  let boxIndex = 0;
  for (let roomIndex = 0; roomIndex < roomHeights.length; roomIndex++) {
    if (boxIndex < boxes.length && boxes[boxIndex] <= roomHeights[roomIndex]) {
      result++;
      boxIndex++;
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
