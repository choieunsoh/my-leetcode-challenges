// 956. Tallest Billboard
// https://leetcode.com/problems/tallest-billboard/
/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
  let dp = new Map([[0, 0]]);
  for (const rod of rods) {
    const newDp = new Map(dp.entries());
    for (const [diff, taller] of dp) {
      const shorter = taller - diff;

      // Add rod to the taller stand, thus the height difference is increased to diff + rod.
      const newTaller = newDp.get(diff + rod) ?? 0;
      newDp.set(diff + rod, Math.max(newTaller, taller + rod));

      // Add rod to the shorter stand, the height difference is expressed as abs(shorter + rod - taller).
      const newDiff = Math.abs(shorter + rod - taller);
      const newTaller2 = Math.max(shorter + rod, taller);
      newDp.set(newDiff, Math.max(newTaller2, newDp.get(newDiff) ?? 0));
    }
    dp = newDp;
  }
  return dp.get(0) ?? 0;
};

var rods = [1, 2, 3, 6];
var expected = 6;
var result = tallestBillboard(rods);
console.log(result, result === expected);

var rods = [1, 2, 3, 4, 5, 6];
var expected = 10;
var result = tallestBillboard(rods);
console.log(result, result === expected);

var rods = [1, 2];
var expected = 0;
var result = tallestBillboard(rods);
console.log(result, result === expected);
