// https://leetcode.com/problems/shortest-distance-to-a-character/
// 821. Shortest Distance to a Character
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const result = [];
  const positions = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) positions.push(i);
  }

  let pos = 0;
  let left = positions[pos];
  let right = positions[pos];
  for (let i = 0; i < s.length; i++) {
    if (i === right) {
      left = positions[pos++];
      if (pos === positions.length) pos--;
      right = positions[pos];
    }
    const shortest = Math.min(Math.abs(i - left), Math.abs(i - right));
    result.push(shortest);
  }

  return result;
};

var s = 'loveleetcode',
  c = 'e';
var expected = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0];
var result = shortestToChar(s, c);
console.log(result.join(' '), result.join() === expected.join());

var s = 'aaab',
  c = 'b';
var expected = [3, 2, 1, 0];
var result = shortestToChar(s, c);
console.log(result.join(' '), result.join() === expected.join());
