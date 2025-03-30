// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/
// T.C.: O(n)
// S.C: O(1)
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const result = [];
  const a = 'a'.charCodeAt(0);
  const lastIndexLetters = new Array(26).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const letterIndex = s.charCodeAt(i) - a;
    lastIndexLetters[letterIndex] = i;
  }

  let lastIndex = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const letterIndex = s.charCodeAt(right) - a;
    lastIndex = Math.max(lastIndex, lastIndexLetters[letterIndex]);
    if (lastIndex === right) {
      result.push(right - left + 1);
      left = right + 1;
    }
  }
  return result;
};

var s = 'ababcbacadefegdehijhklij';
var expected = [9, 7, 8];
var result = partitionLabels(s);
console.log(result, result.join() === expected.join());

var s = 'eccbbbbdec';
var expected = [10];
var result = partitionLabels(s);
console.log(result, result.join() === expected.join());
