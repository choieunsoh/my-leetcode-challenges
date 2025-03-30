// 763. Partition Labels
// https://leetcode.com/problems/partition-labels/
// T.C.: O(n)
// S.C: O(1)
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const partitionSizes = [];
  const lastOccurrence = new Array(26);
  const firstOccurrence = new Array(26).fill(-1);
  const a = 'a'.charCodeAt(0);

  // Store the last occurrence index of each character
  for (let index = 0; index < s.length; index++) {
    lastOccurrence[s.charCodeAt(index) - a] = index;
  }

  let partitionStart = 0;
  let partitionEnd = 0;
  for (let index = 0; index < s.length; index++) {
    const letterIndex = s.charCodeAt(index) - a;

    // Store the first occurrence index of each character (if not set)
    if (firstOccurrence[letterIndex] === -1) {
      firstOccurrence[letterIndex] = index;
    }

    // If we find a new partition start
    if (partitionEnd < firstOccurrence[letterIndex]) {
      partitionSizes.push(partitionEnd - partitionStart + 1);
      partitionStart = index;
      partitionEnd = index;
    }

    // Update partition end boundary
    partitionEnd = Math.max(partitionEnd, lastOccurrence[letterIndex]);
  }

  // Add the last partition if it exists
  if (partitionEnd - partitionStart + 1 > 0) {
    partitionSizes.push(partitionEnd - partitionStart + 1);
  }

  return partitionSizes;
};

var s = 'ababcbacadefegdehijhklij';
var expected = [9, 7, 8];
var result = partitionLabels(s);
console.log(result, result.join() === expected.join());

var s = 'eccbbbbdec';
var expected = [10];
var result = partitionLabels(s);
console.log(result, result.join() === expected.join());
