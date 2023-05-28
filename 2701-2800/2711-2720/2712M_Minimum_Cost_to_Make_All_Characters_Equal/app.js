// 2712. Minimum Cost to Make All Characters Equal
// https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/
/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function (s) {
  if (s.length === 1) return 0;
  const zero = calc(s, '0');
  const one = calc(s, '1');
  return Math.min(one, zero);

  function calc(s, num) {
    let cost = 0;
    const n = s.length;
    const half = (n / 2) | 0;
    let check = num;
    for (let i = half - 1; i > -1; i--) {
      if (s[i] === check) {
        cost += i + 1;
        check = check === '0' ? '1' : '0';
      }
    }

    check = num;
    for (let i = half; i < n; i++) {
      if (s[i] === check) {
        cost += n - i;
        check = check === '0' ? '1' : '0';
      }
    }
    return cost;
  }
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
var expected = 9;
var result = minimumCost(s);
console.log(result, result === expected);
