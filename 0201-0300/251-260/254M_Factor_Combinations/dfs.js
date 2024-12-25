// 254. Factor Combinations
// https://leetcode.com/problems/factor-combinations/description/
// T.C.: O(n^1.5)
// S.C.: O(n log n)
/**
 * @param {number} n
 * @return {number[][]}
 */
var getFactors = function (n) {
  const result = [];
  const stack = [[2, n, []]]; // [start, target, path]
  while (stack.length) {
    const [start, target, path] = stack.pop();
    for (let n = start; n <= Math.sqrt(target); n++) {
      if (target % n === 0) {
        result.push([...path, n, target / n]); // Add factor pair
        stack.push([n, target / n, [...path, n]]); // Continue with factor
      }
    }
  }
  return result;
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
