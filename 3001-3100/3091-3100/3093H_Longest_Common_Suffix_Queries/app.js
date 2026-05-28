// 3093. Longest Common Suffix Queries
// https://leetcode.com/problems/longest-common-suffix-queries/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function (wordsContainer, wordsQuery) {
  const trie = { bestIdx: -1, bestLen: Infinity };
  for (let i = 0; i < wordsContainer.length; i++) {
    const word = wordsContainer[i];
    const len = word.length;
    let node = trie;
    if (len < node.bestLen) {
      node.bestIdx = i;
      node.bestLen = len;
    }

    for (let j = word.length - 1; j >= 0; j--) {
      const ch = word[j];
      if (!node[ch]) {
        node[ch] = { bestIdx: -1, bestLen: Infinity };
      }
      node = node[ch];
      if (len < node.bestLen) {
        node.bestIdx = i;
        node.bestLen = len;
      }
    }
  }

  const result = [];
  for (const query of wordsQuery) {
    let node = trie;
    let nodes = node.bestIdx;
    for (let j = query.length - 1; j >= 0; j--) {
      const ch = query[j];
      if (!node[ch]) break;
      node = node[ch];
      nodes = node.bestIdx;
    }
    result.push(nodes);
  }
  return result;
};

var wordsContainer = ['abcd', 'bcd', 'xbcd'],
  wordsQuery = ['cd', 'bcd', 'xyz'];
var expected = [1, 1, 1];
var result = stringIndices(wordsContainer, wordsQuery);
console.log(result, result.join(',') === expected.join(','));

var wordsContainer = ['abcdefgh', 'poiuygh', 'ghghgh'],
  wordsQuery = ['gh', 'acbfgh', 'acbfegh'];
var expected = [2, 0, 2];
var result = stringIndices(wordsContainer, wordsQuery);
console.log(result, result.join(',') === expected.join(','));
