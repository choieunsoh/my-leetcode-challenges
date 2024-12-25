// 254. Factor Combinations
// https://leetcode.com/problems/factor-combinations/description/
// T.C.: O(n^1.5)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
  const factors = [];
  generate(2, n, []);
  return factors;

  function generate(start, target, path) {
    for (let n = start; n <= Math.sqrt(target); n++) {
      if (target % n === 0) {
        factors.push([...path, target / n, n]);
        path.push(n);
        generate(n, target / n, path);
        path.pop();
      }
    }
  }
};

function toString(arr) {
  return arr
    .map((x) => x.sort().join())
    .sort()
    .join();
}

var n = 1;
var expected = [];
var result = getFactors(n);
console.log(result, toString(result) === toString(expected));

var n = 12;
var expected = [
  [2, 6],
  [3, 4],
  [2, 2, 3],
];
var result = getFactors(n);
console.log(result, toString(result) === toString(expected));

var n = 37;
var expected = [];
var result = getFactors(n);
console.log(result, toString(result) === toString(expected));
