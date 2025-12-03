// 3625. Count Number of Trapezoids II
// https://leetcode.com/problems/count-number-of-trapezoids-ii/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function (points) {
  const INF = 1e9 + 7;
  const n = points.length;
  const slopeToIntercept = new Map();
  const midToSlope = new Map();
  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      const dx = x1 - x2;
      const dy = y1 - y2;

      const k = x1 === x2 ? INF : (y2 - y1) / (x2 - x1);
      const b = x1 === x2 ? x1 : (y1 * dx - x1 * dy) / dx;
      const mid = (x1 + x2) * 10000 + (y1 + y2);

      if (!slopeToIntercept.has(k)) {
        slopeToIntercept.set(k, []);
      }
      slopeToIntercept.get(k).push(b);

      if (!midToSlope.has(mid)) {
        midToSlope.set(mid, []);
      }
      midToSlope.get(mid).push(k);
    }
  }

  let result = 0;
  for (const bValues of slopeToIntercept.values()) {
    if (bValues.length === 1) {
      continue;
    }

    const counts = new Map();
    for (const bVal of bValues) {
      counts.set(bVal, (counts.get(bVal) ?? 0) + 1);
    }

    let totalSum = 0;
    for (const count of counts.values()) {
      result += totalSum * count;
      totalSum += count;
    }
  }

  for (const kValues of midToSlope.values()) {
    if (kValues.length === 1) {
      continue;
    }

    const counts = new Map();
    for (const kVal of kValues) {
      counts.set(kVal, (counts.get(kVal) ?? 0) + 1);
    }

    let totalSum = 0;
    for (const count of counts.values()) {
      result -= totalSum * count;
      totalSum += count;
    }
  }

  return result;
};

var points = [
  [-3, 2],
  [3, 0],
  [2, 3],
  [3, 2],
  [2, -3],
];
var expected = 2;
var result = countTrapezoids(points);
console.log(result, result === expected);

var points = [
  [0, 0],
  [1, 0],
  [0, 1],
  [2, 1],
];
var expected = 1;
var result = countTrapezoids(points);
console.log(result, result === expected);

var points = [
  [209, -385],
  [-35, 319],
  [379, -93],
  [452, 10],
  [179, 163],
  [-118, 196],
  [430, -365],
  [179, -365],
  [-299, 465],
  [209, -410],
  [-375, -403],
  [-163, -227],
  [77, -365],
  [268, 441],
  [460, 465],
  [-163, 465],
  [-412, -267],
  [-412, 53],
  [-46, -280],
  [61, -209],
  [-234, 32],
  [-35, 296],
  [-276, -93],
  [-412, -475],
  [-470, -181],
  [-412, -283],
  [367, 175],
  [-371, 218],
  [209, -79],
  [-226, -74],
  [-435, -410],
  [-80, 10],
  [-433, -365],
  [-35, -93],
  [-470, -67],
  [-378, 0],
  [-82, -331],
  [144, 268],
  [449, -106],
  [-470, -28],
  [452, -370],
  [449, -204],
  [-96, -245],
  [195, 465],
  [-353, 422],
  [-265, -2],
  [-178, 219],
  [-35, 222],
  [-375, -411],
  [-118, -93],
  [-199, 71],
  [49, -209],
  [-301, -276],
  [79, 219],
  [-46, 32],
  [-35, 181],
  [435, 402],
  [449, 465],
  [321, -209],
  [-412, 148],
  [187, 465],
  [367, 496],
  [16, 101],
  [179, 244],
  [-346, 151],
  [-353, 319],
  [-251, -106],
  [-35, 119],
  [-118, -370],
  [-102, 465],
  [-35, 311],
  [452, -62],
  [-118, 441],
  [-412, -259],
  [375, 441],
  [483, -182],
  [-35, -471],
  [462, 289],
  [179, 465],
  [-412, 344],
  [206, 302],
  [449, 417],
  [-25, 500],
  [-118, 43],
  [372, -93],
  [180, 167],
  [-118, 473],
  [106, 144],
  [151, -370],
  [-375, -245],
  [77, -399],
  [-478, 465],
  [-405, -478],
  [-25, -291],
  [359, -347],
  [-371, -410],
  [179, 250],
  [-353, 206],
  [414, -494],
  [-118, -245],
  [-199, 465],
  [28, -127],
  [435, 175],
  [187, -436],
  [209, -250],
  [-35, -28],
  [-35, 219],
  [-257, -93],
  [-25, -24],
  [-35, -236],
];
var expected = 11025;
var result = countTrapezoids(points);
console.log(result, result === expected);
