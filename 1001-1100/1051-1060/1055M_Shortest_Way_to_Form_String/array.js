// 1055. Shortest Way to Form String
// https://leetcode.com/problems/shortest-way-to-form-string/description/
// T.C.: O(T + S)
// S.C.: O(S)
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  // Length of source
  const sourceLength = source.length;

  // Next Occurrence of Character after Index
  const nextOccurrence = Array.from({ length: sourceLength }, () => Array(26).fill(-1));

  // Base Case
  for (let c = 0; c < 26; c++) {
    nextOccurrence[sourceLength - 1][c] = -1;
  }
  nextOccurrence[sourceLength - 1][source[sourceLength - 1].charCodeAt(0) - 'a'.charCodeAt(0)] = sourceLength - 1;

  // Fill using the recurrence relation
  for (let idx = sourceLength - 2; idx >= 0; idx--) {
    for (let c = 0; c < 26; c++) {
      nextOccurrence[idx][c] = nextOccurrence[idx + 1][c];
    }
    nextOccurrence[idx][source[idx].charCodeAt(0) - 'a'.charCodeAt(0)] = idx;
  }

  // Pointer to the current index in source
  let sourceIterator = 0;

  // Number of times we need to iterate through source
  let count = 1;

  // Find all characters of target in source
  for (let idx = 0; idx < target.length; idx++) {
    // If the character is not present in source
    if (nextOccurrence[0][target[idx].charCodeAt(0) - 'a'.charCodeAt(0)] == -1) {
      return -1;
    }

    // If we have reached the end of source, or the character is not in
    // source after source_iterator, loop back to beginning
    if (
      sourceIterator == sourceLength ||
      nextOccurrence[sourceIterator][target[idx].charCodeAt(0) - 'a'.charCodeAt(0)] == -1
    ) {
      count++;
      sourceIterator = 0;
    }

    // Next occurrence of the character in source after source_iterator
    sourceIterator = nextOccurrence[sourceIterator][target[idx].charCodeAt(0) - 'a'.charCodeAt(0)] + 1;
  }

  // Return the number of times we need to iterate through source
  return count;
};

var source = 'abc',
  target = 'abcbc';
var expected = 2;
var result = shortestWay(source, target);
console.log(result, result === expected);

var source = 'abc',
  target = 'acdbc';
var expected = -1;
var result = shortestWay(source, target);
console.log(result, result === expected);

var source = 'xyz',
  target = 'xzyxz';
var expected = 3;
var result = shortestWay(source, target);
console.log(result, result === expected);
