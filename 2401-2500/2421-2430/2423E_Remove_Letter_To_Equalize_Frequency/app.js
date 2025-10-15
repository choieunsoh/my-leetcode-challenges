// 2423. Remove Letter To Equalize Frequency
// https://leetcode.com/problems/remove-letter-to-equalize-frequency/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const counts = new Map();
  for (let i = 0; i < word.length; i++) {
    counts.set(word[i], (counts.get(word[i]) ?? 0) + 1);
  }

  for (const ch of word) {
    const count = counts.get(ch);
    if (count === 1) {
      counts.delete(ch);
    } else {
      counts.set(ch, count - 1);
    }

    const freqSet = new Set(counts.values());
    if (freqSet.size === 1) return true;
    counts.set(ch, count);
  }
  return false;
};

var word = 'abcc';
var expected = true;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'aazz';
var expected = false;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'abcd';
var expected = true;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'aabbzz';
var expected = false;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'abbccc';
var expected = false;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'aca';
var expected = true;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'acbda';
var expected = true;
var result = equalFrequency(word);
console.log(result, result === expected);

var word = 'ddaccb';
var expected = false;
var result = equalFrequency(word);
console.log(result, result === expected);
