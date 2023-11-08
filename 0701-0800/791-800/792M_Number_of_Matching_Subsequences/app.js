// 792. Number of Matching Subsequences
// https://leetcode.com/problems/number-of-matching-subsequences/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!map.has(c)) {
      map.set(c, []);
    }
    map.get(c).push(i);
  }

  let result = 0;
  for (const word of words) {
    let prevIndex = -1;
    let subsequence = true;
    for (const c of word) {
      const indices = map.get(c) ?? [];
      const index = binarySearch(indices, prevIndex);
      if (index === indices.length) {
        subsequence = false;
        break;
      }
      prevIndex = indices[index];
    }

    if (subsequence) result++;
  }

  return result;

  function binarySearch(arr, target) {
    let index = arr.length;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (arr[mid] > target) {
        index = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }
};

var s = 'abcde',
  words = ['a', 'bb', 'acd', 'ace'];
var expected = 3;
var result = numMatchingSubseq(s, words);
console.log(result, result === expected);

var s = 'dsahjpjauf',
  words = ['ahjpjau', 'ja', 'ahbwzgqnuk', 'tnmlanowax'];
var expected = 2;
var result = numMatchingSubseq(s, words);
console.log(result, result === expected);

var s = 'nwmswzegbu',
  words = ['mswz', 'swzegb', 'tpwhdywjst', 'dglnzwitub'];
var expected = 2;
var result = numMatchingSubseq(s, words);
console.log(result, result === expected);
