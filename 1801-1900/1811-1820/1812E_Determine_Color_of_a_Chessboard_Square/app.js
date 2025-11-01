// 1812. Determine Color of a Chessboard Square
// https://leetcode.com/problems/determine-color-of-a-chessboard-square/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const a = 'a'.charCodeAt(0);
  const col = coordinates.charCodeAt(0) - a;
  const row = Number(coordinates[1]);
  return (col + row) % 2 === 0;
};

var coordinates = 'a1';
var expected = false;
var result = squareIsWhite(coordinates);
console.log(result, result === expected);

var coordinates = 'h3';
var expected = true;
var result = squareIsWhite(coordinates);
console.log(result, result === expected);

var coordinates = 'c7';
var expected = false;
var result = squareIsWhite(coordinates);
console.log(result, result === expected);
