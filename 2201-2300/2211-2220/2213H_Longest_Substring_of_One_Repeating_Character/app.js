// 2213. Longest Substring of One Repeating Character
// https://leetcode.com/problems/longest-substring-of-one-repeating-character/description/
// T.C.: O((n+k) log n)
// S.C.: O(n)
const { AvlTree } = require('@datastructures-js/binary-search-tree');
/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function (s, queryCharacters, queryIndices) {
  const n = s.length;
  const arr = s.split('');
  const segs = new AvlTree((a, b) => a.left - b.left);
  const lens = new AvlTree((a, b) => a.len - b.len);

  for (let i = 0; i < n; ) {
    let j = i;
    while (j < n && arr[j] === arr[i]) {
      j++;
    }
    segs.insert({ left: i, right: j - 1 });
    const length = j - i;
    const lenNode = lens.find({ len: length, count: 0 });
    if (lenNode) {
      lenNode.getValue().count++;
    } else {
      lens.insert({ len: length, count: 1 });
    }
    i = j;
  }

  const k = queryIndices.length;
  const result = new Array(k);
  for (let q = 0; q < k; q++) {
    const pos = queryIndices[q];
    const ch = queryCharacters[q];

    if (arr[pos] !== ch) {
      const floorNode = segs.lowerBound({ left: pos, right: 0 });
      const L = floorNode.getValue().left;
      const R = floorNode.getValue().right;
      segs.remove({ left: L, right: 0 });
      removeLen(R - L + 1);

      if (L <= pos - 1) {
        segs.insert({ left: L, right: pos - 1 });
        addLen(pos - L);
      }
      if (pos + 1 <= R) {
        segs.insert({ left: pos + 1, right: R });
        addLen(R - pos);
      }

      let newL = pos,
        newR = pos;

      const rightNode = segs.find({ left: pos + 1, right: 0 });
      if (rightNode && pos + 1 < n && arr[pos + 1] === ch) {
        const rightR = rightNode.getValue().right;
        segs.remove({ left: pos + 1, right: 0 });
        removeLen(rightR - (pos + 1) + 1);
        newR = rightR;
      }

      const leftFloorNode = segs.lowerBound({ left: pos - 1, right: 0 });
      if (leftFloorNode) {
        const lv = leftFloorNode.getValue();
        if (lv.right === pos - 1 && arr[pos - 1] === ch) {
          segs.remove({ left: lv.left, right: 0 });
          removeLen(lv.right - lv.left + 1);
          newL = lv.left;
        }
      }

      segs.insert({ left: newL, right: newR });
      addLen(newR - newL + 1);
      arr[pos] = ch;
    }

    result[q] = lens.max().getValue().len;
  }
  return result;

  function addLen(len) {
    const node = lens.find({ len, count: 0 });
    if (node) {
      node.getValue().count++;
    } else {
      lens.insert({ len, count: 1 });
    }
  }

  function removeLen(len) {
    const node = lens.find({ len, count: 0 });
    if (node && --node.getValue().count === 0) {
      lens.remove({ len, count: 0 });
    }
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
