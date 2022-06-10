// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// 557. Reverse Words in a String III
var reverse = (str) => {
  let s = str.split('');
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[r], s[l]] = [s[l], s[r]];
    l++;
    r--;
  }
  return s.join('');
};
var reverseWords = function (s) {
  let ss = s.split(' ');
  for (let i = 0; i < ss.length; i++) {
    ss[i] = reverse(ss[i]);
  }
  return ss.join(' ');
};

var s = "Let's take LeetCode contest";
var expected = "s'teL ekat edoCteeL tsetnoc";
var result = reverseWords(s);
console.log(result, result === expected);

var s = 'God Ding';
var expected = 'doG gniD';
var result = reverseWords(s);
console.log(result, result === expected);
