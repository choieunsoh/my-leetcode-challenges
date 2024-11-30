// 358. Rearrange String k Distance Apart
// https://leetcode.com/problems/rearrange-string-k-distance-apart/
// T.C.: O((n+k) log k)
// S.C.: O(k)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var rearrangeString = function (s, k) {
  const freq = new Map();
  for (const ch of s) {
    const count = freq.get(ch) ?? 0;
    freq.set(ch, count + 1);
  }

  const free = new MaxPriorityQueue({ compare: (a, b) => b[0] - a[0] || a[1].charCodeAt(0) - b[1].charCodeAt(0) });
  for (const [ch, count] of freq) {
    free.enqueue([count, ch]);
  }

  let result = '';
  // This queue stores the characters that cannot be used now.
  const busy = [];
  while (result.length !== s.length) {
    const index = result.length;

    // Insert the character that could be used now into the free heap.
    if (busy.length && index - busy[0][0] >= k) {
      const [, ch] = busy.shift();
      free.enqueue([freq.get(ch), ch]);
    }

    // If the free heap is empty, it implies no character can be used at this index.
    if (free.isEmpty()) {
      return '';
    }

    const [, currChar] = free.dequeue();
    result += currChar;

    // Insert the used character into busy queue with the current index.
    freq.set(currChar, freq.get(currChar) - 1);
    if (freq.get(currChar) > 0) {
      busy.push([index, currChar]);
    }
  }

  return result;
};

var s = 'aabbcc',
  k = 3;
var expected = 'abcabc';
var result = rearrangeString(s, k);
console.log(result, result === expected);

var s = 'aaabc',
  k = 3;
var expected = '';
var result = rearrangeString(s, k);
console.log(result, result === expected);

var s = 'aaadbbcc',
  k = 2;
var expected = 'abacabcd';
var result = rearrangeString(s, k);
console.log(result, result === expected);
