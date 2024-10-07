// 1055. Shortest Way to Form String
// https://leetcode.com/problems/shortest-way-to-form-string/description/
// T.C.: O(T^2 * S)
// S.C.: O(T * S)
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  const a = 'a'.charCodeAt(0);
  const sourceChars = new Array(26);
  for (let i = 0; i < source.length; i++) {
    sourceChars[source.charCodeAt(i) - a] = true;
  }

  for (let i = 0; i < target.length; i++) {
    if (!sourceChars[target.charCodeAt(i) - a]) {
      return -1;
    }
  }

  let concatenatedSource = source;
  let count = 1;
  while (!isSubsequence(target, concatenatedSource)) {
    concatenatedSource += source;
    count++;
  }
  return count;

  function isSubsequence(target, inString) {
    let i = 0;
    let j = 0;
    while (i < target.length && j < inString.length) {
      if (target[i] === inString[j]) {
        i++;
      }
      j++;
    }
    return i === target.length;
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
