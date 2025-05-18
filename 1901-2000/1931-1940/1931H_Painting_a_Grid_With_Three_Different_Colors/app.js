// 1931. Painting a Grid With Three Different Colors
// https://leetcode.com/problems/painting-a-grid-with-three-different-colors/description/
// T.C.: O(3^2m * n)
// S.C.: O(3^2m)
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function (m, n) {
  const MOD = 1e9 + 7;
  // Hash mapping stores all valid coloration schemes for a single row that meet the requirements
  const valid = new Map();
  // Enumerate masks that meet the requirements within the range [0, 3^m)
  const maskEnd = Math.pow(3, m);
  for (let mask = 0; mask < maskEnd; ++mask) {
    const color = [];
    let mm = mask;
    for (let i = 0; i < m; i++) {
      color.push(mm % 3);
      mm = Math.floor(mm / 3);
    }
    let check = true;
    for (let i = 0; i < m - 1; i++) {
      if (color[i] === color[i + 1]) {
        check = false;
        break;
      }
    }
    if (check) {
      valid.set(mask, color);
    }
  }

  // Preprocess all (mask1, mask2) binary tuples, satisfying mask1 and mask2 When adjacent rows, the colors of the two cells in the same column are different
  const adjacent = new Map();
  for (const [mask1, color1] of valid.entries()) {
    for (const [mask2, color2] of valid.entries()) {
      let check = true;
      for (let i = 0; i < m; ++i) {
        if (color1[i] === color2[i]) {
          check = false;
          break;
        }
      }
      if (check) {
        if (!adjacent.has(mask1)) {
          adjacent.set(mask1, []);
        }
        adjacent.get(mask1).push(mask2);
      }
    }
  }

  let f = new Map();
  for (const [mask, _] of valid.entries()) {
    f.set(mask, 1);
  }
  for (let i = 1; i < n; ++i) {
    const g = new Map();
    for (const [mask2, _] of valid.entries()) {
      for (const mask1 of adjacent.get(mask2) || []) {
        g.set(mask2, ((g.get(mask2) || 0) + f.get(mask1)) % MOD);
      }
    }
    f = g;
  }

  let result = 0;
  for (const num of f.values()) {
    result = (result + num) % MOD;
  }
  return result;
};

var m = 1,
  n = 1;
var expected = 3;
var result = colorTheGrid(m, n);
console.log(result, result === expected);

var m = 1,
  n = 2;
var expected = 6;
var result = colorTheGrid(m, n);
console.log(result, result === expected);

var m = 5,
  n = 5;
var expected = 580986;
var result = colorTheGrid(m, n);
console.log(result, result === expected);
