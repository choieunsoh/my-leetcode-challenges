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
  // List of indices for all characters in source
  let charToIndices = new Array(26);
  for (let i = 0; i < source.length; i++) {
    let c = source[i];
    if (charToIndices[c.charCodeAt(0) - 'a'.charCodeAt(0)] == null) {
      charToIndices[c.charCodeAt(0) - 'a'.charCodeAt(0)] = [];
    }
    charToIndices[c.charCodeAt(0) - 'a'.charCodeAt(0)].push(i);
  }

  // Pointer for source
  let sourceIterator = 0;

  // Number of times we need to iterate through source
  let count = 1;

  // Find all characters of target in source
  for (let i = 0; i < target.length; i++) {
    let c = target[i];

    // If the character is not in the source, return -1
    if (charToIndices[c.charCodeAt(0) - 'a'.charCodeAt(0)] == null) {
      return -1;
    }

    // Binary search to find the index of the character in source
    // next to the source iterator
    let indices = charToIndices[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    let index = binarySearch(indices, sourceIterator);

    // If we have reached the end of the list, we need to iterate
    // through source again, hence first index of character in source.
    if (index == indices.length) {
      count++;
      sourceIterator = indices[0] + 1;
    } else {
      sourceIterator = indices[index] + 1;
    }
  }

  // Return the number of times we need to iterate through source
  return count;

  // Binary search to find the index of the character in source
  // next to the source iterator
  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
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
