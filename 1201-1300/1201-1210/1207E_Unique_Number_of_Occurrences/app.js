// 1207. Unique Number of Occurrences
// https://leetcode.com/problems/unique-number-of-occurrences/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const counter = new Map();
  for (const num of arr) {
    const count = counter.get(num) ?? 0;
    counter.set(num, count + 1);
  }

  const seen = new Set(counter.values());
  return seen.size === counter.size;
};

var arr = [1, 2, 2, 1, 1, 3];
var expected = true;
var result = uniqueOccurrences(arr);
console.log(result, result === expected);

var arr = [1, 2];
var expected = false;
var result = uniqueOccurrences(arr);
console.log(result, result === expected);

var arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
var expected = true;
var result = uniqueOccurrences(arr);
console.log(result, result === expected);
