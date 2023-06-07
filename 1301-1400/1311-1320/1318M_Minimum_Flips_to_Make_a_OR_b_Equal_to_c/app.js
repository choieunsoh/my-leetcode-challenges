// 1318. Minimum Flips to Make a OR b Equal to c
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let binA = a.toString(2);
  let binB = b.toString(2);
  let binC = c.toString(2);

  const n = Math.max(binA.length, binB.length, binC.length);
  binA = binA.padStart(n, '0');
  binB = binB.padStart(n, '0');
  binC = binC.padStart(n, '0');
  let result = 0;

  for (let i = 0; i < n; i++) {
    const x = Number(binA[i]);
    const y = Number(binB[i]);
    const z = Number(binC[i]);

    if (z) {
      if (x || y) continue;
      result++;
    } else {
      result += x + y;
    }
  }

  return result;
};

var a = 2,
  b = 6,
  c = 5;
var expected = 3;
var result = minFlips(a, b, c);
console.log(result, result === expected);

var a = 4,
  b = 2,
  c = 7;
var expected = 1;
var result = minFlips(a, b, c);
console.log(result, result === expected);

var a = 1,
  b = 2,
  c = 3;
var expected = 0;
var result = minFlips(a, b, c);
console.log(result, result === expected);
