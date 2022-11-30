// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/
var checkInclusion = function (s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const N = 26;
  const map1 = Array(N).fill(0);
  const map2 = Array(N).fill(0);
  const a = 'a'.charCodeAt(0);
  const offset = s1.length;

  for (let i = 0; i < offset; i++) {
    map1[s1.charCodeAt(i) - a]++;
    map2[s2.charCodeAt(i) - a]++;
  }
  for (let i = offset; i < s2.length; i++) {
    if (match()) return true;
    map2[s2.charCodeAt(i) - a]++;
    map2[s2.charCodeAt(i - offset) - a]--;
  }

  function match(): boolean {
    for (let i = 0; i < N; i++) {
      if (map1[i] !== map2[i]) return false;
    }
    return true;
  }

  return match();
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
