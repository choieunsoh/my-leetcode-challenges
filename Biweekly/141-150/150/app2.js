/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function (squares) {
  const error = 5e-6;
  const maxY = getMaxY();
  let lowY = 0;
  let highY = maxY;
  let minY = maxY;
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

  function getMaxY() {
    let maxY = 0;
    for (const [, y, l] of squares) {
      maxY = Math.max(maxY, y + l);
    }
    return maxY;
  }

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
