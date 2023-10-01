// 557. Reverse Words in a String III
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const str = s.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = reverse(str[i]);
  }
  return str.join(' ');

  function reverse(s) {
    const str = s.split('');
    let l = 0;
    let r = str.length - 1;
    while (l < r) {
      [str[r], str[l]] = [str[l], str[r]];
      l++;
      r--;
    }
    return str.join('');
  }
};

var s = "Let's take LeetCode contest";
var expected = "s'teL ekat edoCteeL tsetnoc";
var result = reverseWords(s);
console.log(result, result === expected);

var s = 'God Ding';
var expected = 'doG gniD';
var result = reverseWords(s);
console.log(result, result === expected);
