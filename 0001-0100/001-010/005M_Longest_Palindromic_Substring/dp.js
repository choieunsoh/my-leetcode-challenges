// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function (s) {
  if (!s) return '';
  if (s.length === 1) return s;

  let maxLength = 1;
  let start = 0;
  const dp = Array(s.length);
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[i] = true;
      } else if (i + 1 === j) {
        dp[i] = s[i] === s[j];
      } else {
        dp[i] = dp[i + 1] && s[i] === s[j];
      }

      if (dp[i] && j - i + 1 > maxLength) {
        maxLength = j - i + 1;
        start = i;
      }
    }
  }

  return s.substring(start, start + maxLength);
};

var s = 'babad';
var expected = 'bab';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'cbbd';
var expected = 'bb';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'aaba';
var expected = 'aba';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'ccc';
var expected = 'ccc';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'abcdcbaaaaaaaa';
var expected = 'aaaaaaaa';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'ab';
var expected = 'a';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'bb';
var expected = 'bb';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'babad';
var expected = 'bab';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'cbbd';
var expected = 'bb';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'aaaa';
var expected = 'aaaa';
var result = longestPalindrome(s);
console.log(result, result === expected);

var s = 'aacabdkacaa';
var expected = 'aca';
var s =
  'azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc';
var expected = 'sooos';
var result = longestPalindrome(s);
console.log(result, result === expected);
