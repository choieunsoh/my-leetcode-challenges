// 438. Find All Anagrams in a String
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
var findAnagrams = function (s: string, p: string): number[] {
  const result: number[] = [];
  const a = 'a'.charCodeAt(0);
  const counting = new Array(26).fill(0);
  for (const ch of p) {
    const letter = ch.charCodeAt(0) - a;
    counting[letter]++;
  }

  let left = -1;
  for (let right = 0; right < s.length; right++) {
    const letter = s.charCodeAt(right) - a;
    if (counting[letter] > 0) {
      counting[letter]--;
    } else {
      while (s[++left] !== s[right]) {
        const letter = s.charCodeAt(left) - a;
        counting[letter]++;
      }
    }

    if (right - left === p.length) {
      result.push(left + 1);
    }
  }

  return result;
};

var s = 'cbaebabacd',
  p = 'abc';
var expected = [0, 6];
var result = findAnagrams(s, p);
console.log(result, result.join() === expected.join());

var s = 'abab',
  p = 'ab';
var expected = [0, 1, 2];
var result = findAnagrams(s, p);
console.log(result, result.join() === expected.join());
