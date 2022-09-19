// https://leetcode.com/problems/positions-of-large-groups/
// 830. Positions of Large Groups
/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[start] !== s[i]) {
      const length = i - start;
      length > 2 && result.push([start, i - 1]);
      start = i;
    }
    end = i;
  }
  if (start !== end && end - start + 1 > 2) {
    result.push([start, end]);
  }
  return result;
};

var s = 'abbxxxxzzy';
var expected = [[3, 6]];
var result = largeGroupPositions(s);
console.log(result, result.join() === expected.join());

var s = 'abc';
var expected = [];
var result = largeGroupPositions(s);
console.log(result, result.join() === expected.join());

var s = 'aa';
var expected = [];
var result = largeGroupPositions(s);
console.log(result, result.join() === expected.join());

var s = 'aaa';
var expected = [[0, 2]];
var result = largeGroupPositions(s);
console.log(result, result.join() === expected.join());

var s = 'abcdddeeeeaabbbcd';
var expected = [
  [3, 5],
  [6, 9],
  [12, 14],
];
var result = largeGroupPositions(s);
console.log(result, result.join() === expected.join());
