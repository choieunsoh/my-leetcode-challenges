// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  let maximum = 0;
  for (let i = 0; i < n.length; i++) {
    maximum = Math.max(maximum, Number(n[i]));
  }
  return maximum;
};

var n = '32';
var expected = 3;
var result = minPartitions(n);
console.log(result, result === expected);

var n = '82734';
var expected = 8;
var result = minPartitions(n);
console.log(result, result === expected);

var n = '27346209830709182346';
var expected = 9;
var result = minPartitions(n);
console.log(result, result === expected);
