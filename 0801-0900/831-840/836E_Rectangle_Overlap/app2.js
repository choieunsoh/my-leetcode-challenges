// 836. Rectangle Overlap
// https://leetcode.com/problems/rectangle-overlap/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  return (
    Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) && // width > 0
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]) // height > 0
  );
};

var rec1 = [0, 0, 2, 2],
  rec2 = [1, 1, 3, 3];
var expected = true;
var result = isRectangleOverlap(rec1, rec2);
console.log(result, result === expected);

var rec1 = [0, 0, 1, 1],
  rec2 = [1, 0, 2, 1];
var expected = false;
var result = isRectangleOverlap(rec1, rec2);
console.log(result, result === expected);

var rec1 = [0, 0, 1, 1],
  rec2 = [2, 2, 3, 3];
var expected = false;
var result = isRectangleOverlap(rec1, rec2);
console.log(result, result === expected);
