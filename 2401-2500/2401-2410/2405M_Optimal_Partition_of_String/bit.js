// 2405. Optimal Partition of String
// https://leetcode.com/problems/optimal-partition-of-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  const a = 'a'.charCodeAt(0);
  let count = 1;
  let mask = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a + 1;
    if (mask & (1 << ch)) {
      count++;
      mask = 0;
    }
    mask |= 1 << ch;
  }
  return count;
};

var s = 'abacaba';
var expected = 4;
var result = partitionString(s);
console.log(result, result === expected);

var s = 'ssssss';
var expected = 6;
var result = partitionString(s);
console.log(result, result === expected);
