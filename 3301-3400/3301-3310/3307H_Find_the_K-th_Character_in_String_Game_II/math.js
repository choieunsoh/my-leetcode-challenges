// 3307. Find the K-th Character in String Game II
// https://leetcode.com/problems/find-the-k-th-character-in-string-game-ii/description/
// T.C.: O(log k)
// S.C.: O(1)
/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function (k, operations) {
  let offset = 0;
  k--;
  for (let i = Math.floor(Math.log2(k)); i >= 0; i--) {
    if ((BigInt(k) >> BigInt(i)) & 1n) {
      offset += operations[i];
    }
  }
  return String.fromCharCode('a'.charCodeAt(0) + (offset % 26));
};

var k = 5,
  operations = [0, 0, 0];
var expected = 'a';
var result = kthCharacter(k, operations);
console.log(result, result === expected);

var k = 10,
  operations = [0, 1, 0, 1];
var expected = 'b';
var result = kthCharacter(k, operations);
console.log(result, result === expected);
