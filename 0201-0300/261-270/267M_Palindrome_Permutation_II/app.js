// 267. Palindrome Permutation II
// https://leetcode.com/problems/palindrome-permutation-ii/description/
// T.C.: O((n/2+1)!)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function (s) {
  const set = new Set();
  const map = new Array(128).fill(0);
  const st = new Array((s.length / 2) | 0);
  if (!canPermutePalindrome(s, map)) {
    return [];
  }

  let ch = 0;
  let k = 0;
  for (let i = 0; i < map.length; i++) {
    if (map[i] % 2 == 1) ch = String.fromCharCode(i);
    for (let j = 0; j < Math.floor(map[i] / 2); j++) {
      st[k++] = String.fromCharCode(i);
    }
  }
  permute(st, 0, ch);
  return [...set];

  function canPermutePalindrome(s, map) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      map[s.charCodeAt(i)]++;
      if (map[s.charCodeAt(i)] % 2 == 0) count--;
      else count++;
    }
    return count <= 1;
  }

  function swap(s, i, j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  function permute(s, l, ch) {
    if (l === s.length) {
      set.add(s.join('') + (ch === 0 ? '' : ch) + s.slice().reverse().join(''));
    } else {
      for (let i = l; i < s.length; i++) {
        if (s[l] !== s[i] || l == i) {
          swap(s, l, i);
          permute(s, l + 1, ch);
          swap(s, l, i);
        }
      }
    }
  }
};

var s = 'aabb';
var expected = ['abba', 'baab'];
var result = generatePalindromes(s);
console.log(result, result.toString() === expected.toString());

var s = 'abc';
var expected = [];
var result = generatePalindromes(s);
console.log(result, result.toString() === expected.toString());

var s = 'a';
var expected = ['a'];
var result = generatePalindromes(s);
console.log(result, result.toString() === expected.toString());
