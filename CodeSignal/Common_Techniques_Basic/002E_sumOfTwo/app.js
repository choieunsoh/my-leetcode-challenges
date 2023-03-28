// sumOfTwo
/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} v
 * @return {boolean}
 */
function sumOfTwo(a, b, v) {
  const seen = new Set();
  for (const num of b) {
    seen.add(v - num);
  }
  for (const num of a) {
    if (seen.has(num)) return true;
  }
  return false;
}

var a = [1, 2, 3],
  b = [10, 20, 30, 40],
  v = 42;
var expected = true;
var result = sumOfTwo(a, b, v);
console.log(result, result === expected);
