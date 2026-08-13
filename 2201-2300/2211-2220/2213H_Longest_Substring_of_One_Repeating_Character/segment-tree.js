// 2213. Longest Substring of One Repeating Character
// https://leetcode.com/problems/longest-substring-of-one-repeating-character/description/
// T.C.: O((n+k) log n)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function (s, queryCharacters, queryIndices) {
  const n = s.length;
  const pre = new Array(4 * n).fill(0);
  const suf = new Array(4 * n).fill(0);
  const maxLen = new Array(4 * n).fill(0);
  const leftChar = new Array(4 * n).fill('');
  const rightChar = new Array(4 * n).fill('');

  build(1, 0, n - 1);
  const k = queryIndices.length;
  const result = new Array(k);
  for (let i = 0; i < k; i++) {
    update(1, 0, n - 1, queryIndices[i], queryCharacters[i]);
    result[i] = maxLen[1];
  }
  return result;

  function pushUp(u, l, r) {
    const mid = (l + r) >> 1;
    const leftLen = mid - l + 1,
      rightLen = r - mid;
    const left = u << 1,
      right = (u << 1) | 1;
    leftChar[u] = leftChar[left];
    rightChar[u] = rightChar[right];
    pre[u] = pre[left];
    if (pre[left] === leftLen && rightChar[left] === leftChar[right]) {
      pre[u] = pre[left] + pre[right];
    }
    suf[u] = suf[right];
    if (suf[right] === rightLen && rightChar[left] === leftChar[right]) {
      suf[u] = suf[right] + suf[left];
    }
    maxLen[u] = Math.max(maxLen[left], maxLen[right]);
    if (rightChar[left] === leftChar[right]) {
      maxLen[u] = Math.max(maxLen[u], suf[left] + pre[right]);
    }
  }

  function build(u, l, r) {
    if (l === r) {
      pre[u] = 1;
      suf[u] = 1;
      maxLen[u] = 1;
      leftChar[u] = s[l];
      rightChar[u] = s[l];
      return;
    }
    const mid = (l + r) >> 1;
    build(u << 1, l, mid);
    build((u << 1) | 1, mid + 1, r);
    pushUp(u, l, r);
  }

  function update(u, l, r, pos, ch) {
    if (l === r) {
      leftChar[u] = ch;
      rightChar[u] = ch;
      return;
    }
    const mid = (l + r) >> 1;
    if (pos <= mid) {
      update(u << 1, l, mid, pos, ch);
    } else {
      update((u << 1) | 1, mid + 1, r, pos, ch);
    }
    pushUp(u, l, r);
  }
};

var s = 'babacc',
  queryCharacters = 'bcb',
  queryIndices = [1, 3, 3];
var expected = [3, 3, 4];
var result = longestRepeating(s, queryCharacters, queryIndices);
console.log(result, result.toString() === expected.toString());

var s = 'abyzz',
  queryCharacters = 'aa',
  queryIndices = [2, 1];
var expected = [2, 3];
var result = longestRepeating(s, queryCharacters, queryIndices);
console.log(result, result.toString() === expected.toString());
