// 3133. Minimum Array End
// https://leetcode.com/problems/minimum-array-end/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
  let N = BigInt(n - 1);
  let X = BigInt(x);
  const bitN = new Array(64);
  const bitX = new Array(64);
  for (let i = 0; i < 64; i++) {
    bitN[i] = Number(N & 1n);
    bitX[i] = Number(X & 1n);
    N >>= 1n;
    X >>= 1n;
  }

  let posX = 0;
  let posN = 0;
  while (posX < 64) {
    while (posX < 64 && bitX[posX]) {
      posX++;
    }
    bitX[posX++] = bitN[posN++];
  }

  let result = 0;
  for (let i = 0; i < 64; ++i) {
    if (bitX[i] === 1) {
      result += 2 ** i;
    }
  }
  return result;
};

var n = 3,
  x = 4;
var expected = 6;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 2,
  x = 7;
var expected = 15;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 3,
  x = 7;
var expected = 23;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 4,
  x = 7;
var expected = 31;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 5,
  x = 7;
var expected = 39;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 6,
  x = 7;
var expected = 47;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 7,
  x = 7;
var expected = 55;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 6715154,
  x = 7193485;
var expected = 55012476815;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);
