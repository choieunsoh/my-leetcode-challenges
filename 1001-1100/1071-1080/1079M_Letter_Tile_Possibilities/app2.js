// 1079. Letter Tile Possibilities
// https://leetcode.com/problems/letter-tile-possibilities/description/
// T.C.: O(n*n!)
// S.C.: O(n)
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const sequences = new Set();
  const n = tiles.length;
  const used = new Array(n).fill(false);
  generateSequences('');
  return sequences.size;

  function generateSequences(current) {
    if (current) {
      sequences.add(current);
    }

    for (let i = 0; i < n; i++) {
      if (used[i]) continue;

      used[i] = true;
      generateSequences(current + tiles[i]);
      used[i] = false;
    }
  }
};

var tiles = 'AAB';
var expected = 8;
var result = numTilePossibilities(tiles);
console.log(result, result === expected);

var tiles = 'AAABBC';
var expected = 188;
var result = numTilePossibilities(tiles);
console.log(result, result === expected);

var tiles = 'V';
var expected = 1;
var result = numTilePossibilities(tiles);
console.log(result, result === expected);
