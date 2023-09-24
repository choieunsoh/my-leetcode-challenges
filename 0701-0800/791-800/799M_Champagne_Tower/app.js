// 799. Champagne Tower
// https://leetcode.com/problems/champagne-tower
/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  const glasses = Array.from({ length: query_row + 2 }, () => new Array(query_row + 2).fill(0));
  glasses[0][0] = poured;
  for (let row = 0; row <= query_row; row++) {
    for (let glass = 0; glass <= row; glass++) {
      const halfExcess = (glasses[row][glass] - 1.0) / 2.0;
      if (halfExcess > 0) {
        glasses[row + 1][glass] += halfExcess;
        glasses[row + 1][glass + 1] += halfExcess;
      }
    }
  }
  return Math.min(1, glasses[query_row][query_glass]);
};

var poured = 1,
  query_row = 1,
  query_glass = 1;
var expected = 0.0;
var result = champagneTower(poured, query_row, query_glass);
console.log(result, result === expected);

var poured = 2,
  query_row = 1,
  query_glass = 1;
var expected = 0.5;
var result = champagneTower(poured, query_row, query_glass);
console.log(result, result === expected);

var poured = 100000009,
  query_row = 33,
  query_glass = 17;
var expected = 1.0;
var result = champagneTower(poured, query_row, query_glass);
console.log(result, result === expected);

var poured = 100000009,
  query_row = 99,
  query_glass = 99;
var expected = 0.0;
var result = champagneTower(poured, query_row, query_glass);
console.log(result, result === expected);
