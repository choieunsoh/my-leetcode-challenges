// 1461. Check If a String Contains All Binary Codes of Size K
// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/description/
// T.C.: O(n)
// S.C.: O(k)
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  let need = 1 << k;
  const got = new Array(need).fill(false);
  const allOne = need - 1;
  let hashVal = 0;

  for (let i = 0; i < s.length; i++) {
    // calculate hash for s.substr(i-k+1,i+1)
    hashVal = ((hashVal << 1) & allOne) | (s.charAt(i) - '0');
    // hash only available when i-k+1 > 0
    if (i >= k - 1 && !got[hashVal]) {
      got[hashVal] = true;
      need--;
      if (need === 0) {
        return true;
      }
    }
  }
  return false;
};

var s = '00110110',
  k = 2;
var expected = true;
var result = hasAllCodes(s, k);
console.log(result, result === expected);

var s = '0110',
  k = 1;
var expected = true;
var result = hasAllCodes(s, k);
console.log(result, result === expected);

var s = '0110',
  k = 2;
var expected = false;
var result = hasAllCodes(s, k);
console.log(result, result === expected);

var s = '00110',
  k = 2;
var expected = true;
var result = hasAllCodes(s, k);
console.log(result, result === expected);
