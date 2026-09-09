// 248. Strobogrammatic Number III
// https://leetcode.com/problems/strobogrammatic-number-iii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var strobogrammaticInRange = function (low, high) {
  let count = 0;
  const map = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  };

  for (let n = low.length; n <= high.length; n++) {
    count += dfs(low, high, new Array(n), 0, n - 1);
  }
  return count;

  function dfs(low, high, n, left, right) {
    if (left > right) {
      const tooSmall = n.join('').length === low.length && n.join('') < low;
      const tooLarge = n.join('').length === high.length && n.join('') > high;
      if (tooSmall || tooLarge) return 0;
      else return 1;
    }
    let count = 0;
    for (let d in map) {
      n[left] = d;
      n[right] = map[d];
      const not0start = !(n.length !== 1 && n[0] === '0');
      const notSingle69 = !(left === right && (d === '6' || d === '9'));
      if (not0start && notSingle69) count += dfs(low, high, n, left + 1, right - 1);
    }
    return count;
  }
};

var low = '50',
  high = '100';
var expected = 3;
var result = strobogrammaticInRange(low, high);
console.log(result, result === expected);

var low = '0',
  high = '0';
var expected = 1;
var result = strobogrammaticInRange(low, high);
console.log(result, result === expected);
