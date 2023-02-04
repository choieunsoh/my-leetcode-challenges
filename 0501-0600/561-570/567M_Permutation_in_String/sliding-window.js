// 567. Permutation in String
// https://leetcode.com/problems/permutation-in-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const count1 = Array(26).fill(0);
  const count2 = Array(26).fill(0);

  const a = 'a'.charCodeAt(0);
  const offset = s1.length;
  for (let i = 0; i < offset; i++) {
    const ch1 = s1.charCodeAt(i) - a;
    const ch2 = s2.charCodeAt(i) - a;
    count1[ch1]++;
    count2[ch2]++;
  }

  let count = 0;
  for (let i = 0; i < count1.length; i++) {
    if (count1[i] === count2[i]) count++;
  }

  for (let i = offset; i < s2.length; i++) {
    if (count === 26) return true;

    const chR = s2.charCodeAt(i) - a;
    count2[chR]++;
    if (count1[chR] === count2[chR]) {
      count++;
    } else if (count1[chR] + 1 === count2[chR]) {
      count--;
    }

    const chL = s2.charCodeAt(i - offset) - a;
    count2[chL]--;
    if (count1[chL] === count2[chL]) {
      count++;
    } else if (count1[chL] - 1 === count2[chL]) {
      count--;
    }
  }

  return count === 26;
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
