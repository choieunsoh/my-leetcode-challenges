// firstNotRepeatingCharacter;
// LC-3: https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {number[]} a
 * @return {number}
 */
function firstNotRepeatingCharacter(s) {
  const map = new Map();
  for (const ch of s) {
    const count = map.get(ch) ?? 0;
    map.set(ch, count + 1);
  }
  for (const [ch, count] of map) {
    if (count === 1) return ch;
  }
  return '_';
}

var s = 'abacabad';
var expected = 'c';
var result = firstNotRepeatingCharacter(s);
console.log(result, result === expected);

var s = 'abacabaabacaba';
var expected = '_';
var result = firstNotRepeatingCharacter(s);
console.log(result, result === expected);
