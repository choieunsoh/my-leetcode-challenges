// 3453. Separate Squares I
// https://leetcode.com/problems/separate-squares-i/description/
// T.C.: O(n log (range/error))
// S.C.: O(1)
/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
  const error = 5e-6;

  let lowY = 0;
  let highY = Number.MAX_SAFE_INTEGER;
  for (const [, y, l] of squares) {
    lowY = Math.max(lowY, y);
    highY = Math.min(highY, y + l);
  }

  let minY = highY;
  while (lowY <= highY) {
    const midY = (lowY + highY) / 2;
    if (Math.abs(minY - midY) <= error) {
      break;
    }

    const [areaBelow, areaAbove] = getArea(midY);
    if (areaBelow >= areaAbove) {
      minY = midY;
      highY = midY - error;
    } else {
      lowY = midY + error;
    }
  }
  return Number(minY.toFixed(5));

  function getArea(pivot) {
    let areaBelow = 0;
    let areaAbove = 0;
    for (const [, y, l] of squares) {
      const y1 = y;
      const y2 = y + l;
      if (y2 <= pivot) {
        areaBelow += l * l;
      } else if (y1 >= pivot) {
        areaAbove += l * l;
      } else {
        areaBelow += (pivot - y1) * l;
        areaAbove += (y2 - pivot) * l;
      }
    }
    return [areaBelow, areaAbove];
  }
};

var squares = [
  [0, 0, 1],
  [2, 2, 1],
];
var expected = 1.0;
var result = separateSquares(squares);
console.log(result, result === expected);

var squares = [
  [0, 0, 2],
  [1, 1, 1],
];
var expected = 1.16667;
var result = separateSquares(squares);
console.log(result, result === expected);

var squares = [
  [21, 30, 5],
  [21, 27, 5],
];
var expected = 31;
var result = separateSquares(squares);
console.log(result, result === expected);
