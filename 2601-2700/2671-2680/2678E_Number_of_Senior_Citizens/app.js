// 2678. Number of Senior Citizens
// https://leetcode.com/problems/number-of-senior-citizens/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;
  for (const detail of details) {
    const age = Number(detail.slice(-4, -2));
    if (age > 60) count++;
  }
  return count;
};

var details = ['7868190130M7522', '5303914400F9211', '9273338290F4010'];
var expected = 2;
var result = countSeniors(details);
console.log(result, result === expected);

var details = ['1313579440F2036', '2921522980M5644'];
var expected = 0;
var result = countSeniors(details);
console.log(result, result === expected);
