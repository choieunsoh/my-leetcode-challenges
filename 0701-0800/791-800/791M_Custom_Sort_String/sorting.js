// 791. Custom Sort String
// https://leetcode.com/problems/custom-sort-string/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }
  const result = [...s];
  result.sort((a, b) => {
    if (map.has(a) && map.has(b)) {
      return map.get(a) - map.get(b);
    } else if (map.has(a)) {
      return -1;
    } else if (map.has(b)) {
      return 1;
    } else {
      return 0;
    }
  });
  return result.join('');
};

var order = 'cba',
  s = 'abcd';
var expected = 'cbad';
var result = customSortString(order, s);
console.log(result, result === expected);

var order = 'bcafg',
  s = 'abcd';
var expected = 'bcad';
var result = customSortString(order, s);
console.log(result, result === expected);
