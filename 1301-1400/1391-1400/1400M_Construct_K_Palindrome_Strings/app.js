// 1400. Construct K Palindrome Strings
// https://leetcode.com/problems/construct-k-palindrome-strings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;
  if (s.length === k) return true;

  const a = 'a'.charCodeAt(0);
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - a]++;
  }

  let oddCount = 0;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] & 1) oddCount++;
  }
  return oddCount <= k;
};

var s = 'annabelle',
  k = 2;
var expected = true;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'leetcode',
  k = 3;
var expected = false;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'true',
  k = 4;
var expected = true;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'ab',
  k = 10;
var expected = false;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'cr',
  k = 7;
var expected = false;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'a',
  k = 1;
var expected = true;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'yiipem',
  k = 3;
var expected = false;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'abcdefghijklmnopqrstuvwxyz',
  k = 25;
var expected = false;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s = 'rraceca',
  k = 3;
var expected = true;
var result = canConstruct(s, k);
console.log(result, result === expected);

var s =
    'dwhjvyplfsdbgjxqcfvngjsowlmjpkmuasvfvbvvrmnectsrbyfomxskpajfowsnfpkxdmqcifozydqqzeflvdulslyxpyejxjvpnrkqnlrchpzaaaqsxabpgtrssnvtcathbbywnzuszajwpvpqavewpqjxzltijwnpjdhhmezcfaazghlcpylwyylpkncoqlseqizirlxuzlicmezlrbptgmcixhruqtrbtwuebsstsmsttzexdmpkfuukevyepkzmfuetklhbrgkelzrbjteisnujiryfqjqkgoqxevtoqlesrlmzpewhxnngdcmdwxaqyinrxsdvtwepoznsvsybbvqdieffigolowmehabgcmpnxjjjaexvhyesisxoeqvsacwmykfvzxudoiedivyfxyeduoghowpyzatvakmfndewyjobxdscamkhohlybdmnsiawzehtrhktmgtgbarisackxsjvekfdlhsgawsnceauavwzmxtljxssonuwiwftvpjeufqyezgyutfvfsqcqtpkaesibkwxkhhvgtwwoebziplwwttuvpmypqdqjiwcamdlwstprplbunwjcbzkjhpgqjvnhcvpnzyrsvtsmcezkfehxdekjwxjeohwuxljqoyrdvziwflwvgdmwiqtumiubqwjfgouddnhuzxgmdjaujxaxnfdjqatgybqznkutkqakzmkcowibruocgzophvbvfsxdraricdltozvxzppxgbckbyiibpnzhwtebjzudwlshwirltmvmjcitwtysccjcjzjabzkvhclwmufgrtbavgknvvefhozasnodnrjernryytmzkmgobcvckeiqahlnwkaippnrqfmzaimoccnssbrmlmoxknwwpmwiblqdntffdjumbiejzexfgvrrbcqwyqybsehytbssbwtovyeencqirqfhaxtylxxnhvksytmbmttaggtijmoywky',
  k = 30;
var expected = true;
var result = canConstruct(s, k);
console.log(result, result === expected);
