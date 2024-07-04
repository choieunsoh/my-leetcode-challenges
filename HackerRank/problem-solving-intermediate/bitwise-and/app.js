// T.C.: O(n ^ 2)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
function countPairs(arr) {
  let count = 0;
  const freq = new Map();
  for (const num of arr) {
    freq.set(num, ~~freq.get(num) + 1);
  }

  for (const [numA, countA] of freq) {
    for (const [numB, countB] of freq) {
      const n = numA & numB;
      if (isPowerOfTwo(n)) {
        if (numA === numB) {
          count += (countA * (countA - 1)) / 2;
        } else {
          count += countA * countB;
        }
      }
    }
  }
  return count / 2;

  function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
  }
}

var arr = [10, 7, 2, 8, 3];
var expected = 6;
var result = countPairs(arr);
console.log(result, result === expected);

var arr = [1, 2, 3, 4];
var expected = 2;
var result = countPairs(arr);
console.log(result, result === expected);

var arr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
var expected = 0;
var result = countPairs(arr);
console.log(result, result === expected);

var arr = [0, 1, 2, 4];
var expected = 0;
var result = countPairs(arr);
console.log(result, result === expected);

var arr = [3, 3, 3, 3];
var expected = 0;
var result = countPairs(arr);
console.log(result, result === expected);
