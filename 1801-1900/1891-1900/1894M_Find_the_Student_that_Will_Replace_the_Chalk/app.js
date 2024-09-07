// 1894. Find the Student that Will Replace the Chalk
// https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
  const totalChalk = chalk.reduce((a, b) => a + b);
  k %= totalChalk;

  for (let i = 0; i < chalk.length; i++) {
    if (k < chalk[i]) return i;
    k -= chalk[i];
  }
  return -1;
};

var chalk = [5, 1, 5],
  k = 22;
var expected = 0;
var result = chalkReplacer(chalk, k);
console.log(result, result === expected);

var chalk = [3, 4, 1, 2],
  k = 25;
var expected = 1;
var result = chalkReplacer(chalk, k);
console.log(result, result === expected);
