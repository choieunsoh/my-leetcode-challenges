// https://leetcode.com/problems/reverse-prefix-of-word/
// 2000. Reverse Prefix of Word
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  if (!word.includes(ch)) return word;

  word = word.split('');
  let left = 0;
  let right = 0;
  while (right < word.length) {
    if (word[right] === ch) break;
    right++;
  }

  while (left < right) {
    [word[left], word[right]] = [word[right], word[left]];
    left++;
    right--;
  }

  return word.join('');
};

var word = 'abcdefd',
  ch = 'd';
var expected = 'dcbaefd';
var result = reversePrefix(word, ch);
console.log(result, result === expected);

var word = 'xyxzxe',
  ch = 'z';
var expected = 'zxyxxe';
var result = reversePrefix(word, ch);
console.log(result, result === expected);

var word = 'abcd',
  ch = 'z';
var expected = 'abcd';
var result = reversePrefix(word, ch);
console.log(result, result === expected);
