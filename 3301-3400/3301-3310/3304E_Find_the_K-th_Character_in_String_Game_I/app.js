// 3304. Find the K-th Character in String Game I
// https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/
// T.C.: O(k)
// S.C.: O(k)
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let curr = 'a';
  const rounds = Math.log2(k) + 1;
  for (let round = 0; round < rounds; round++) {
    let next = '';
    for (let i = 0; i < curr.length; i++) {
      next += String.fromCharCode(curr.charCodeAt(i) + 1);
    }
    curr += next;
  }
  return curr[k - 1];
};

var k = 5;
var expected = 'b';
var result = kthCharacter(k);
console.log(result, result === expected);

var k = 10;
var expected = 'c';
var result = kthCharacter(k);
console.log(result, result === expected);
