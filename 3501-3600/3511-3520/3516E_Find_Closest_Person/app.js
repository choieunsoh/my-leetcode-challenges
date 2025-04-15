// 3516. Find Closest Person
// https://leetcode.com/problems/find-closest-person/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
  const first = Math.abs(x - z);
  const second = Math.abs(y - z);
  if (first < second) return 1;
  if (first > second) return 2;
  return 0;
};

var x = 2,
  y = 7,
  z = 4;
var expected = 1;
var result = findClosest(x, y, z);
console.log(result, result === expected);

var x = 2,
  y = 5,
  z = 6;
var expected = 2;
var result = findClosest(x, y, z);
console.log(result, result === expected);

var x = 1,
  y = 5,
  z = 3;
var expected = 0;
var result = findClosest(x, y, z);
console.log(result, result === expected);
