// 2158. Amount of New Area Painted Each Day
// https://leetcode.com/problems/amount-of-new-area-painted-each-day/description/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function (paint) {
  const result = new Array(paint.length).fill(0);
  const paintedTill = new Array(50001).fill(0);

  for (let i = 0; i < paint.length; i++) {
    let [start, end] = paint[i];

    while (start < end) {
      const nextStart = Math.max(start + 1, paintedTill[start]);

      if (paintedTill[start] === 0) {
        result[i]++;
      }

      paintedTill[start] = Math.max(paintedTill[start], end);
      start = nextStart;
    }
  }

  return result;
};

var paint = [
  [1, 4],
  [5, 8],
  [4, 7],
];
var expected = [3, 3, 1];
var result = amountPainted(paint);
console.log(result, result.join(',') === expected.join(','));

var paint = [
  [1, 5],
  [2, 4],
];
var expected = [4, 0];
var result = amountPainted(paint);
console.log(result, result.join(',') === expected.join(','));
