// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1map = Array(26).fill(0);
  const s2map = Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    s1map[s1.charCodeAt(i) - a]++;
    s2map[s2.charCodeAt(i) - a]++;
  }
  const start = s1.length;
  for (let i = start; i < s2.length; i++) {
    if (match(s1map, s2map)) return true;
    s2map[s2.charCodeAt(i) - a]++;
    s2map[s2.charCodeAt(i - start) - a]--;
  }

  function match(map1, map2) {
    for (let i = 0; i < map1.length; i++) {
      if (map1[i] !== map2[i]) return false;
    }
    return true;
  }

  return match(s1map, s2map);
};

var s1 = 'ab',
  s2 = 'eidbaooo';
var expected = true;
var result = checkInclusion(s1, s2);
console.log(result, expected, result === expected);

var s1 = 'ab',
  s2 = 'eidboaoo';
var expected = false;
var result = checkInclusion(s1, s2);
console.log(result, expected, result === expected);
