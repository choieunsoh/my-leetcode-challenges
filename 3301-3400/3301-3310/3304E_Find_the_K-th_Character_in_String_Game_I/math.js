// 3304. Find the K-th Character in String Game I
// https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/
// T.C.: O(log k)
// S.C.: O(1)
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let offset = 0;
  while (k !== 1) {
    let t = 31 - Math.clz32(k);
    if (1 << t === k) {
      t--;
    }
    k -= 1 << t;
    offset++;
  }
  return String.fromCharCode('a'.charCodeAt(0) + offset);
};

var k = 5;
var expected = 'b';
var result = kthCharacter(k);
console.log(result, result === expected);

var k = 10;
var expected = 'c';
var result = kthCharacter(k);
console.log(result, result === expected);
