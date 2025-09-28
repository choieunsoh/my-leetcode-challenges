// 3692. Majority Frequency Characters
// https://leetcode.com/problems/majority-frequency-characters/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function (s) {
  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  const freqMap = new Map();
  for (let i = 0; i < 26; i++) {
    const freq = counts[i];
    if (freq > 0) {
      freqMap.set(freq, (freqMap.get(freq) ?? '') + String.fromCharCode(i + a));
    }
  }

  let lastFreq = 0;
  let result = '';
  for (const [freq, chars] of freqMap) {
    if (result.length < chars.length) {
      result = chars;
      lastFreq = freq;
    } else if (result.length === chars.length && freq > lastFreq) {
      result = chars;
      lastFreq = freq;
    }
  }
  return result;
};

var s = 'aaabbbccdddde';
var expected = 'ab';
var result = majorityFrequencyGroup(s);
console.log(result, result === expected);

var s = 'abcd';
var expected = 'abcd';
var result = majorityFrequencyGroup(s);
console.log(result, result === expected);

var s = 'pfpfgi';
var expected = 'fp';
var result = majorityFrequencyGroup(s);
console.log(result, result === expected);

var s = 'fefizfrdnmaepqboddzdreubkdrdylnkmsivavidjdtqxkslsq';
var expected = 'efikqrs';
var result = majorityFrequencyGroup(s);
console.log(result, result === expected);
