// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = s.split('');
  const len = s.length;
  let lastSpaceIndex = -1;
  for (let index = 0; index <= len; index++) {
    const isLastIndex = index === s.length;
    if (isLastIndex || s.charAt(index) === ' ') {
      let startIndex = lastSpaceIndex + 1;
      let endIndex = isLastIndex ? index : index - 1;
      while (startIndex < endIndex) {
        [result[startIndex], result[endIndex]] = [result[endIndex], result[startIndex]];
        startIndex++;
        endIndex--;
      }
      lastSpaceIndex = index;
    }
  }
  return result.join('');
};

var s = "Let's take LeetCode contest";
var expected = "s'teL ekat edoCteeL tsetnoc";
var result = reverseWords(s);
console.log(result, result === expected);

var s = 'God Ding';
var expected = 'doG gniD';
var result = reverseWords(s);
console.log(result, result === expected);
