// 1520. Maximum Number of Non-Overlapping Substrings
// https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function (s) {
  const seg = Array.from({ length: 26 }, () => new Seg());

  // Preprocess the left and right endpoints.
  for (let i = 0; i < s.length; i++) {
    const charIdx = s.charCodeAt(i) - 'a'.charCodeAt(0);

    if (seg[charIdx].left === -1) {
      seg[charIdx].left = seg[charIdx].right = i;
    } else {
      seg[charIdx].right = i;
    }
  }

  for (let i = 0; i < 26; i++) {
    if (seg[i].left !== -1) {
      let j = seg[i].left;

      while (j <= seg[i].right) {
        const charIdx = s.charCodeAt(j) - 'a'.charCodeAt(0);

        if (seg[i].left <= seg[charIdx].left && seg[charIdx].right <= seg[i].right) {
        } else {
          seg[i].left = Math.min(seg[i].left, seg[charIdx].left);
          seg[i].right = Math.max(seg[i].right, seg[charIdx].right);
          j = seg[i].left;
        }

        j++;
      }
    }
  }

  // Greedily select intervals.
  seg.sort((a, b) => {
    if (a.right === b.right) {
      return b.left - a.left;
    }
    return a.right - b.right;
  });

  const ans = [];
  let end = -1;

  for (const segment of seg) {
    const { left, right } = segment;

    if (left === -1) {
      continue;
    }

    if (end === -1 || left > end) {
      end = right;
      ans.push(s.slice(left, right + 1));
    }
  }

  return ans;
};

class Seg {
  constructor(left = -1, right = -1) {
    this.left = left;
    this.right = right;
  }
}

var s = 'adefaddaccc';
var expected = ['e', 'f', 'ccc'];
var result = maxNumOfSubstrings(s);
console.log(result, result.join() === expected.join());

var s = 'abbaccd';
var expected = ['d', 'bb', 'cc'];
var result = maxNumOfSubstrings(s);
console.log(result, result.sort().join() === expected.sort().join());
