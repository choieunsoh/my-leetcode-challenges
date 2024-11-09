// 833. Find And Replace in String
// https://leetcode.com/problems/find-and-replace-in-string/description/
// T.C.: O(m*n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const str = s.split('');
  const k = indices.length;
  for (let i = 0; i < k; i++) {
    const index = indices[i];
    const source = sources[i];
    const target = targets[i];
    const indexEnd = index + source.length;
    const subStr = s.slice(index, indexEnd);
    if (subStr === source) {
      str[index] = target;
      for (let j = index + 1; j < indexEnd; j++) {
        str[j] = '';
      }
    }
  }
  return str.join('');
};

var s = 'abcd',
  indices = [0, 2],
  sources = ['a', 'cd'],
  targets = ['eee', 'ffff'];
var expected = 'eeebffff';
var result = findReplaceString(s, indices, sources, targets);
console.log(result, result === expected);

var s = 'abcd',
  indices = [0, 2],
  sources = ['ab', 'ec'],
  targets = ['eee', 'ffff'];
var expected = 'eeecd';
var result = findReplaceString(s, indices, sources, targets);
console.log(result, result === expected);

var s = 'jjievdtjfb',
  indices = [4, 6, 1],
  sources = ['md', 'tjgb', 'jf'],
  targets = ['foe', 'oov', 'e'];
var expected = 'jjievdtjfb';
var result = findReplaceString(s, indices, sources, targets);
console.log(result, result === expected);
