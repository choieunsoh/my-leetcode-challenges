// 3963. Create Grid With Exactly One Path
// https://leetcode.com/problems/create-grid-with-exactly-one-path/description/
// T.C.: O(m * n)
// S.C.: O(n)
/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
  const grid = new Array(m);
  grid[0] = '.'.repeat(n);
  const row = '#'.repeat(n - 1) + '.';
  for (let i = 1; i < m; i++) {
    grid[i] = row;
  }
  return grid;
};

var m = 2,
  n = 3;
var expected = ['..#', '#..'];
var result = createGrid(m, n);
console.log(result, result.join('') === expected.join(''));

var m = 3,
  n = 3;
var expected = ['..#', '#..', '##.'];
var result = createGrid(m, n);
console.log(result, result.join('') === expected.join(''));

var m = 1,
  n = 4;
var expected = ['....'];
var result = createGrid(m, n);
console.log(result, result.join('') === expected.join(''));
