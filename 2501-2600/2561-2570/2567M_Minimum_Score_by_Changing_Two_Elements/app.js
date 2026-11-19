// 2567. Minimum Score by Changing Two Elements
// https://leetcode.com/problems/minimum-score-by-changing-two-elements/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function (nums) {
  const small = [Infinity, Infinity, Infinity];
  const neg = [Infinity, Infinity, Infinity]; // the 3 smallest values, and the 3 smallest negated ones: minus the 3 largest
  for (const x of nums) {
    keep(small, x);
    keep(neg, -x);
  }
  return Math.min(-neg[0] - small[2], -neg[1] - small[1], -neg[2] - small[0]);

  function keep(three, x) {
    // three: the 3 smallest values so far, ascending
    if (x >= three[2]) return;
    let i = 2;
    for (; i > 0 && three[i - 1] > x; i--) {
      three[i] = three[i - 1];
    }
    three[i] = x;
  }
};

var nums = [1, 4, 7, 8, 5];
var expected = 3;
var result = minimizeSum(nums);
console.log(result, result === expected);

var nums = [1, 4, 3];
var expected = 0;
var result = minimizeSum(nums);
console.log(result, result === expected);
