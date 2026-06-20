// 1840. Maximum Building Height
// https://leetcode.com/problems/maximum-building-height/description/
// T.C.: O(m log m)
// S.C.: O(log m)
/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function (n, restrictions) {
  // Add restriction (1, 0)
  restrictions.push([1, 0]);

  // Sort by position
  restrictions.sort((a, b) => a[0] - b[0]);

  // Add restriction (n, n-1)
  if (restrictions[restrictions.length - 1][0] !== n) {
    restrictions.push([n, n - 1]);
  }

  const m = restrictions.length;

  // Pass restrictions from left to right
  for (let i = 1; i < m; i++) {
    const dist = restrictions[i][0] - restrictions[i - 1][0];
    restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i - 1][1] + dist);
  }

  // Pass restrictions from right to left
  for (let i = m - 2; i >= 0; i--) {
    const dist = restrictions[i + 1][0] - restrictions[i][0];
    restrictions[i][1] = Math.min(restrictions[i][1], restrictions[i + 1][1] + dist);
  }

  let result = 0;
  for (let i = 0; i < m - 1; i++) {
    const dist = restrictions[i + 1][0] - restrictions[i][0];
    const best = Math.floor((dist + restrictions[i][1] + restrictions[i + 1][1]) / 2);
    result = Math.max(result, best);
  }

  return result;
};

var n = 5,
  restrictions = [
    [2, 1],
    [4, 1],
  ];
var expected = 2;
var results = maxBuilding(n, restrictions);
console.log(results, results === expected);

var n = 6,
  restrictions = [];
var expected = 5;
var results = maxBuilding(n, restrictions);
console.log(results, results === expected);

var n = 10,
  restrictions = [
    [5, 3],
    [2, 5],
    [7, 4],
    [10, 3],
  ];
var expected = 5;
var results = maxBuilding(n, restrictions);
console.log(results, results === expected);
