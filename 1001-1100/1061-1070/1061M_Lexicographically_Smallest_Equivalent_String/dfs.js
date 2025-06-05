// 1061. Lexicographically Smallest Equivalent String
// https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const adjMatrix = Array.from({ length: 26 }, () => Array(26).fill(null));
  for (let i = 0; i < s1.length; i++) {
    const u = s1.charCodeAt(i) - 97;
    const v = s2.charCodeAt(i) - 97;
    adjMatrix[u][v] = 1;
    adjMatrix[v][u] = 1;
  }

  const mappingChar = Array.from({ length: 26 }, (_, i) => i);
  const visited = new Array(26).fill(null);
  let minChar;

  for (let c = 0; c < 26; c++) {
    if (visited[c] === null) {
      const component = [];
      minChar = 27;
      dfs(c, component);
      for (const vertex of component) {
        mappingChar[vertex] = minChar;
      }
    }
  }

  let ans = '';
  for (const ch of baseStr) {
    ans += String.fromCharCode(mappingChar[ch.charCodeAt(0) - 97] + 97);
  }
  return ans;

  function dfs(src, component) {
    visited[src] = 1;
    component.push(src);
    minChar = Math.min(minChar, src);
    for (let i = 0; i < 26; i++) {
      if (adjMatrix[src][i] !== null && visited[i] === null) {
        dfs(i, component);
      }
    }
  }
};

var s1 = 'parker',
  s2 = 'morris',
  baseStr = 'parser';
var expected = 'makkek';
var result = smallestEquivalentString(s1, s2, baseStr);
console.log(result, result === expected);

var s1 = 'hello',
  s2 = 'world',
  baseStr = 'hold';
var expected = 'hdld';
var result = smallestEquivalentString(s1, s2, baseStr);
console.log(result, result === expected);

var s1 = 'leetcode',
  s2 = 'programs',
  baseStr = 'sourcecode';
var expected = 'aauaaaaada';
var result = smallestEquivalentString(s1, s2, baseStr);
console.log(result, result === expected);
