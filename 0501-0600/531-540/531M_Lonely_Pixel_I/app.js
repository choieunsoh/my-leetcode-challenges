// 531. Lonely Pixel I
// https://leetcode.com/problems/lonely-pixel-i/description/
// T.C.: O(m*n)
// S.C.: O(m+n)
/**
 * @param {character[][]} picture
 * @return {number}
 */
var findLonelyPixel = function (picture) {
  const rows = picture.length;
  const cols = picture[0].length;

  const blackRowCount = new Array(rows).fill(0);
  const blackColCount = new Array(cols).fill(0);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (picture[row][col] === 'B') {
        blackRowCount[row]++;
        blackColCount[col]++;
      }
    }
  }

  let lonelyBlackCount = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (picture[row][col] === 'B' && blackRowCount[row] === 1 && blackColCount[col] === 1) {
        lonelyBlackCount++;
      }
    }
  }
  return lonelyBlackCount;
};

var picture = [
  ['W', 'W', 'B'],
  ['W', 'B', 'W'],
  ['B', 'W', 'W'],
];
var expected = 3;
var result = findLonelyPixel(picture);
console.log(result, result === expected);

var picture = [
  ['B', 'B', 'B'],
  ['B', 'B', 'W'],
  ['B', 'B', 'B'],
];
var expected = 0;
var result = findLonelyPixel(picture);
console.log(result, result === expected);

var picture = [
  ['W', 'W', 'B'],
  ['W', 'W', 'B'],
  ['B', 'W', 'W'],
];
var expected = 1;
var result = findLonelyPixel(picture);
console.log(result, result === expected);
