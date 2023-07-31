// 712. Minimum ASCII Delete Sum for Two Strings
// https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;
  const dp = new Map();
  const result = computeCost(n1 - 1, n2 - 1);
  return result;

  function computeCost(i, j) {
    if (i < 0 && j < 0) return 0;

    const key = `${i},${j}`;
    if (dp.has(key)) return dp.get(key);

    if (i < 0) {
      const cost = s2.charCodeAt(j) + computeCost(i, j - 1);
      dp.set(key, cost);
      return cost;
    }
    if (j < 0) {
      const cost = s1.charCodeAt(i) + computeCost(i - 1, j);
      dp.set(key, cost);
      return cost;
    }

    if (s1.charAt(i) === s2.charAt(j)) {
      const cost = computeCost(i - 1, j - 1);
      dp.set(key, cost);
      return cost;
    }

    const cost1 = s1.charCodeAt(i) + computeCost(i - 1, j);
    const cost2 = s2.charCodeAt(j) + computeCost(i, j - 1);
    const cost = Math.min(cost1, cost2);
    dp.set(key, cost);
    return cost;
  }
};
var s1 = 'sea',
  s2 = 'eat';
var expected = 231;
var result = minimumDeleteSum(s1, s2);
console.log(result, result === expected);

var s1 = 'delete',
  s2 = 'leet';
var expected = 403;
var result = minimumDeleteSum(s1, s2);
console.log(result, result === expected);
