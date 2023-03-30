// 87. Scramble String
// https://leetcode.com/problems/scramble-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const isValid = (s1, s2) => {
    let res = 0;
    for (let i = 0; i < s1.length; i++) {
      res ^= s1.charCodeAt(i) ^ s2.charCodeAt(i);
    }
    return res === 0;
  };
  const cache = new Map();
  const isScr = (s1, s2) => {
    const key = `${s1}_${s2}`;
    if (cache.has(key)) {
      return cache.get(key);
    }
    if (!isValid(s1, s2)) {
      cache.set(key, false);
      return false;
    }
    if (s1 === s2) {
      cache.set(key, true);
      return true;
    }
    if (s1.length === 1) {
      cache.set(key, false);
      return false;
    }
    for (let i = 1; i < s1.length; i++) {
      if (isScr(s1.slice(0, i), s2.slice(-i)) && isScr(s1.slice(i), s2.slice(0, -i))) {
        cache.set(key, true);
        return true;
      }
      if (isScr(s1.slice(0, i), s2.slice(0, i)) && isScr(s1.slice(i), s2.slice(i))) {
        cache.set(key, true);
        return true;
      }
    }
    cache.set(key, false);
    return false;
  };

  return isScr(s1, s2);
};

var s1 = 'great',
  s2 = 'rgeat';
var expected = true;
var result = isScramble(s1, s2);
console.log(result, result === expected);

var s1 = 'abcde',
  s2 = 'caebd';
var expected = false;
var result = isScramble(s1, s2);
console.log(result, result === expected);

var s1 = 'a',
  s2 = 'a';
var expected = true;
var result = isScramble(s1, s2);
console.log(result, result === expected);
