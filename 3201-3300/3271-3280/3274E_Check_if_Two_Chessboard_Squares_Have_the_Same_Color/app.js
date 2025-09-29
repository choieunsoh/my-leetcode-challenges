// 3274. Check if Two Chessboard Squares Have the Same Color
// https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  const x1 = coordinate1.charCodeAt(0);
  const y1 = Number(coordinate1[1]);
  const x2 = coordinate2.charCodeAt(0);
  const y2 = Number(coordinate2[1]);
  return (x1 + y1 - x2 - y2) % 2 === 0;
};

var coordinate1 = 'a1',
  coordinate2 = 'c3';
var expected = true;
var result = checkTwoChessboards(coordinate1, coordinate2);
console.log(result, result === expected);

var coordinate1 = 'a1',
  coordinate2 = 'h3';
var expected = false;
var result = checkTwoChessboards(coordinate1, coordinate2);
console.log(result, result === expected);
