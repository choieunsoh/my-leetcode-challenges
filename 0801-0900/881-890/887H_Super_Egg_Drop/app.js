// 887. Super Egg Drop
// https://leetcode.com/problems/super-egg-drop/description/
// T.C.: O(k log n)
// S.C.: O(1)
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function (k, n) {
  let left = 1;
  let right = n;
  let result = 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (f(mid, k, n) < n) {
      left = mid + 1;
      result = left;
    } else {
      right = mid - 1;
    }
  }
  return result;

  function f(x, k, n) {
    let result = 0;
    let r = 1;
    for (let i = 1; i <= k; ++i) {
      r *= x - i + 1;
      r /= i;
      result += r;
      if (result >= n) break;
    }
    return result;
  }
};

var k = 1,
  n = 2;
var expected = 2;
var result = superEggDrop(k, n);
console.log(result, result === expected);

var k = 2,
  n = 6;
var expected = 3;
var result = superEggDrop(k, n);
console.log(result, result === expected);

var k = 3,
  n = 14;
var expected = 4;
var result = superEggDrop(k, n);
console.log(result, result === expected);
