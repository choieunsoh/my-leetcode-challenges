const longestPalindrome = (s) => {
  if (!s) return '';
  if (s.length === 1) return s;

  let maxLength = 1;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    while (left >= 0 && s[left] === s[i]) left--;

    let right = i + 1;
    while (right < s.length && s[right] === s[i]) right++;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    let length = right - left - 1;
    if (length > maxLength) {
      console.log(i, start, left, right, length, maxLength);
      maxLength = length;
      start = left + 1;
    }
  }

  return s.substring(start, start + maxLength);
};

let s = '';
//console.log(s, longestPalindrome(s));
s = 'aaba';
s = 'ccc';
console.log(s, longestPalindrome(s));
s = 'abcdcbaaaaaaaa';
console.log(s, longestPalindrome(s));
/*s = "ab";
console.log(s, longestPalindrome(s));
s = "bb";
console.log(s, longestPalindrome(s));
s = "babad";
console.log(s, longestPalindrome(s));
s = "cbbd";
console.log(s, longestPalindrome(s));
s = "aaaa";
console.log(s, longestPalindrome(s));
s = "aacabdkacaa";
console.log(s, longestPalindrome(s));
s =
  "azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc";
console.log(s, longestPalindrome(s));
*/
