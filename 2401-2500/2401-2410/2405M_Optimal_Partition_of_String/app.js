// 2405. Optimal Partition of String
// https://leetcode.com/problems/optimal-partition-of-string/
/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  const a = 'a'.charCodeAt(0);
  const lastSeen = Array(26).fill(-1);
  let startIndex = 0;
  let count = 1;
  // abacaba
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i) - a;
    if (lastSeen[ch] >= startIndex) {
      count++;
      startIndex = i;
    }
    lastSeen[ch] = i;
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
