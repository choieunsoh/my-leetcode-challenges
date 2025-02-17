// 1079. Letter Tile Possibilities
// https://leetcode.com/problems/letter-tile-possibilities/description/
// T.C.: O(n*2^n)
// S.C.: O(n*2^n)
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const seen = new Set();
  const sortedTiles = tiles.split('').sort().join('');
  return generateSequences(sortedTiles, '', 0) - 1;

  function generateSequences(tiles, current, pos) {
    if (pos === tiles.length) {
      if (!seen.has(current)) {
        seen.add(current);
        return countPermutations(current);
      }
      return 0;
    }

    const skip = generateSequences(tiles, current, pos + 1);
    const take = generateSequences(tiles, current + tiles[pos], pos + 1);
    return skip + take;
  }

  function countPermutations(seq) {
    const A = 'A'.charCodeAt(0);
    const counts = new Array(26).fill(0);
    for (let i = 0; i < seq.length; i++) {
      counts[seq.charCodeAt(i) - A]++;
    }

    let total = factorial(seq.length);
    for (const count of counts) {
      total /= factorial(count);
    }
    return total;
  }

  function factorial(n) {
    if (n <= 1) {
      return 1;
    }

    let result = 1;
    for (let num = 2; num <= n; num++) {
      result *= num;
    }
    return result;
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
