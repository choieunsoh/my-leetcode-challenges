/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function (points) {
  const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));
  let maxArea = -1;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];

      if (x1 !== x2 && y1 !== y2) {
        const corner1 = `${x1},${y2}`;
        const corner2 = `${x2},${y1}`;

        //console.log(i, j, corner1, corner2);

        if (pointSet.has(corner1) && pointSet.has(corner2)) {
          let hasInnerPoints = false;
          const minX = Math.min(x1, x2);
          const maxX = Math.max(x1, x2);
          const minY = Math.min(y1, y2);
          const maxY = Math.max(y1, y2);
          //console.log('x', minX, maxX);
          //console.log('y', minY, maxY);
          //console.log([x1, y1], [x2, y2]);
          //console.log([x1, y2], [x2, y1]);
          for (const [x, y] of points) {
            //console.log([x, y]);
            if (x === x1 && y === y1) continue;
            if (x === x2 && y === y2) continue;
            if (x === x1 && y === y2) continue;
            if (x === x2 && y === y1) continue;
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
              hasInnerPoints = true;
              break;
            }
          }
          //console.log(hasInnerPoints);

          if (!hasInnerPoints) {
            const area = Math.abs(x2 - x1) * Math.abs(y2 - y1);
            maxArea = Math.max(maxArea, area);
          }
        }
      }
    }
  }

  return maxArea;
};

// Test cases
var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
];
var expected = 4;
var result = maxRectangleArea(points);
console.log(result, result === expected); // Output: 4 true

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [2, 2],
];
var expected = -1;
var result = maxRectangleArea(points);
console.log(result, result === expected); // Output: -1 true

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [1, 2],
  [3, 2],
];
var expected = 2;
var result = maxRectangleArea(points);
console.log(result, result === expected); // Output: 2 true
