// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} sides
 * @return {number}
 */
function nearlySimilarRectangles(sides) {
  let pairs = 0;
  const ratioCount = new Map();
  for (const [a, b] of sides) {
    const g = gcd(a, b);
    const ratio = `${a / g}/${b / g}`; // a / b;
    const count = ratioCount.get(ratio) ?? 0;
    ratioCount.set(ratio, count + 1);
    pairs += count;
  }
  return pairs;

  function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  }
}

var sides = [
  [5, 10],
  [10, 10],
  [3, 6],
  [9, 9],
];
var expected = 2;
var result = nearlySimilarRectangles(sides);
console.log(result, result === expected);

var sides = [
  [4, 8],
  [15, 30],
  [25, 50],
];
var expected = 3;
var result = nearlySimilarRectangles(sides);
console.log(result, result === expected);

var sides = [
  [2, 1],
  [10, 7],
  [9, 6],
  [6, 9],
  [7, 3],
];
var expected = 0;
var result = nearlySimilarRectangles(sides);
console.log(result, result === expected);

var sides = [
  [4, 8],
  [15, 30],
  [25, 50],
  [3, 6],
];
var expected = 6;
var result = nearlySimilarRectangles(sides);
console.log(result, result === expected);
