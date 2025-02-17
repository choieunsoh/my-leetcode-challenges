// 1079. Letter Tile Possibilities
// https://leetcode.com/problems/letter-tile-possibilities/description/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let count = 0;
  const A = 'A'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < tiles.length; i++) {
    counts[tiles.charCodeAt(i) - A]++;
  }
  generateSequences();
  return count;

  function generateSequences() {
    for (let i = 0; i < 26; i++) {
      if (counts[i] === 0) continue;

      count++;
      counts[i]--;
      generateSequences();
      counts[i]++;
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
