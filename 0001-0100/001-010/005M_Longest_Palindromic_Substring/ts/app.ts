// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function (s: string): string {
  if (!s) return '';
  if (s.length === 1) return s;

  let maxLength = 1;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    while (left >= 0 && s[i] === s[left]) left--;

    let right = i + 1;
    while (right < s.length && s[i] === s[right]) right++;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    const length = right - (left + 1);
    if (length > maxLength) {
      maxLength = length;
      start = left + 1;
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
