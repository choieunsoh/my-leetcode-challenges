/**
 * @param {number[]} original
 * @param {number[][]} bounds
 * @return {number}
 */
var countArrays = function (original, bounds) {
  return 0;
};

var original = [1, 2, 3, 4],
  bounds = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];
var expected = 2;
var result = countArrays(original, bounds);
console.log(result, result === expected);

var original = [1, 2, 3, 4],
  bounds = [
    [1, 10],
    [2, 9],
    [3, 8],
    [4, 7],
  ];
var expected = 4;
var result = countArrays(original, bounds);
console.log(result, result === expected);

var original = [1, 2, 1, 2],
  bounds = [
    [1, 1],
    [2, 3],
    [3, 3],
    [2, 3],
  ];
var expected = 0;
var result = countArrays(original, bounds);
console.log(result, result === expected);
