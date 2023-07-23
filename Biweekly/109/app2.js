/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  const data = 'AEIOUaeiou'.split('').map((ch) => [ch, 0]);
  const vowels = new Map(data);
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (vowels.has(ch)) {
      vowels.set(ch, vowels.get(ch) + 1);
    }
  }

  const chars = [...vowels.values()];
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (vowels.has(ch)) {
      while (chars[index] === 0) {
        index++;
      }
      chars[index]--;
      result += data[index][0];
    } else {
      result += ch;
    }
  }

  return result;
};

var s = 'lEetcOde';
var expected = 'lEOtcede';
var result = sortVowels(s);
console.log(result, result === expected);

var s = 'lYmpH';
var expected = 'lYmpH';
var result = sortVowels(s);
console.log(result, result === expected);
