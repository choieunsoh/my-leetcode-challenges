/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasSpecialSubstring = function (s, k) {
  if (k > s.length) return false;

  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    const ch = String.fromCharCode(a + i);
    const target = ch.repeat(k);
    let pos = s.indexOf(target);
    while (pos !== -1) {
      if (s[pos - 1] !== ch && s[pos + k] !== ch) {
        return true;
      }
      pos = s.indexOf(target, pos + 1);
    }
  }
  return false;
};

var s = 'aaabaaa',
  k = 3;
var expected = true;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);

var s = 'abc',
  k = 2;
var expected = false;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);

var s = 'aabaaaacaaada',
  k = 3;
var expected = true;
var result = hasSpecialSubstring(s, k);
console.log(result, result === expected);
