// 2246. Longest Path With Different Adjacent Characters
// https://leetcode.com/problems/longest-path-with-different-adjacent-characters/
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function (parent, s) {
  let longestPath = 1;
  const n = parent.length;
  if (n === 1) return longest;

  const map = [];
  for (let i = 1; i < n; i++) {
    if (map[parent[i]] === undefined) map[parent[i]] = [];
    map[parent[i]].push(i);
  }

  dfs(0);

  function dfs(parent) {
    if (!map[parent]) return 1;

    let longestChain = 0;
    let secondLongestChain = 0;
    for (const child of map[parent]) {
      const longestChainStartingFromChild = dfs(child);
      if (s[parent] === s[child]) continue;

      if (longestChainStartingFromChild > longestChain) {
        secondLongestChain = longestChain;
        longestChain = longestChainStartingFromChild;
      } else if (longestChainStartingFromChild > secondLongestChain) {
        secondLongestChain = longestChainStartingFromChild;
      }
    }

    longestPath = Math.max(longestPath, longestChain + secondLongestChain + 1);
    return longestChain + 1;
  }

  return longestPath;
};

var parent = [-1, 0, 1],
  s = 'aab';
var expected = 2;
var result = longestPath(parent, s);
console.log(result, result === expected);

var parent = [-1, 0, 1, 2, 3, 4],
  s = 'zzabab';
var expected = 5;
var result = longestPath(parent, s);
console.log(result, result === expected);

var parent = [-1, 0, 0, 1, 1, 2],
  s = 'abacbe';
var expected = 3;
var result = longestPath(parent, s);
console.log(result, result === expected);

var parent = [-1, 0, 0, 0],
  s = 'aabc';
var expected = 3;
var result = longestPath(parent, s);
console.log(result, result === expected);
