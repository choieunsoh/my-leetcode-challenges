// 2103. Rings and Rods
// https://leetcode.com/problems/rings-and-rods/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function (rings) {
  let count = 0;
  const COLORS = { R: 0, G: 1, B: 2 };
  const rods = Array.from({ length: 10 }, () => new Array(3).fill(false));
  for (let i = 0; i < rings.length; i += 2) {
    const ringColorIndex = COLORS[rings[i]];
    const rodIndex = Number(rings[i + 1]);
    rods[rodIndex][ringColorIndex] = true;
  }
  for (const rod of rods) {
    if (rod.every(Boolean)) {
      count++;
    }
  }
  return count;
};

var rings = 'B0B6G0R6R0R6G9';
var expected = 1;
var result = countPoints(rings);
console.log(result, result === expected);

var rings = 'B0R0G0R9R0B0G0';
var expected = 1;
var result = countPoints(rings);
console.log(result, result === expected);

var rings = 'G4';
var expected = 0;
var result = countPoints(rings);
console.log(result, result === expected);
