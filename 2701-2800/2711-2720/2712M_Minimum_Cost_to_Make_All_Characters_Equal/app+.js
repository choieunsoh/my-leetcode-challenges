// 2712. Minimum Cost to Make All Characters Equal
// https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/
/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  let cost = 0;
  const n = s.length;
  for (let i = 1; i < n; i++) {
    if (s[i] !== s[i - 1]) {
      cost += Math.min(i, n - i);
    }
  }
  return cost;
};

var s = '0011';
var expected = 2;
var result = minimumCost(s);
console.log(result, result === expected);

var s = '010101';
var expected = 9;
var result = minimumCost(s);
console.log(result, result === expected);

var s = '0';
var expected = 0;
var result = minimumCost(s);
console.log(result, result === expected);

var s = '000001';
var expected = 1;
var result = minimumCost(s);
console.log(result, result === expected);
