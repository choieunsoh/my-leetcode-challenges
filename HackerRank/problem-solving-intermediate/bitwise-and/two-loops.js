// T.C.: O(n ^ 2)
// S.C.: O(1)
/**
 * @param {number[]} arr
 * @return {number}
 */
function countPairs(arr) {
  let count = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const n = arr[i] & arr[j];
      if (isPowerOfTwo(n)) {
        count++;
      }
    }
  }
  return count;

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
