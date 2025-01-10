// 2185. Counting Words With a Given Prefix
// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  for (const word of words) {
    count += hasPrefix(word, pref);
  }
  return count;

  // Returns 1 if str has pref as prefix, 0 otherwise
  function hasPrefix(str, pref) {
    let itr;
    // Compare characters until we reach end of either string
    for (itr = 0; itr < str.length && itr < pref.length; itr++) {
      if (str.charAt(itr) !== pref.charAt(itr)) {
        return 0; // Mismatch found
      }
    }

    // Check if we've matched entire prefix
    if (itr != pref.length) {
      return 0; // str is shorter than pref
    }
    return 1;
  }
};

var words = ['pay', 'attention', 'practice', 'attend'],
  pref = 'at';
var expected = 2;
var result = prefixCount(words, pref);
console.log(result, result === expected);

var words = ['leetcode', 'win', 'loops', 'success'],
  pref = 'code';
var expected = 0;
var result = prefixCount(words, pref);
console.log(result, result === expected);
