// 2975. Maximum Square Area by Removing Fences From a Field
// https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/description/
// T.C.: O(h^2+v^2)
// S.C.: O(h^2+v^2)
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */
var maximizeSquareArea = function (m, n, hFences, vFences) {
  const MOD = 1e9 + 7;

  const getEdges = (fences, border) => {
    const set = new Set();
    const list = [...fences];
    list.push(1);
    list.push(border);
    list.sort((a, b) => a - b);

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        set.add(list[j] - list[i]);
      }
    }

    return set;
  };

  const hEdges = getEdges(hFences, m);
  const vEdges = getEdges(vFences, n);

  let res = 0;
  for (const e of hEdges) {
    if (vEdges.has(e)) {
      res = Math.max(res, e);
    }
  }

  if (res === 0) {
    return -1;
  }

  return Number((BigInt(res) * BigInt(res)) % BigInt(MOD));
};

var m = 4,
  n = 3,
  hFences = [2, 3],
  vFences = [2];
var expected = 4;
var result = maximizeSquareArea(m, n, hFences, vFences);
console.log(result, result === expected);

var m = 6,
  n = 7,
  hFences = [2],
  vFences = [4];
var expected = -1;
var result = maximizeSquareArea(m, n, hFences, vFences);
console.log(result, result === expected);
