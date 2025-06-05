// 1061. Lexicographically Smallest Equivalent String
// https://leetcode.com/problems/lexicographically-smallest-equivalent-string/
// T.C.: O(n+m)
// S.C.: O(1)
class UnionFind {
  constructor() {
    this.id = new Map();
    this.rank = new Map();
  }
  find(x) {
    let y = this.id.get(x) ?? x;
    if (y !== x) {
      y = this.find(y);
    }
    return y;
  }
  union(x, y) {
    if (!this.rank.has(this.find(x))) {
      this.rank.set(this.find(x), 0);
    }
    if (!this.rank.has(this.find(y))) {
      this.rank.set(this.find(y), 0);
    }
    if (this.rank.get(this.find(x)) < this.rank.get(this.find(y))) {
      this.id.set(this.find(x), this.find(y));
    } else {
      this.id.set(this.find(y), this.find(x));
      if (this.rank.get(this.find(x)) == this.rank.get(this.find(y))) {
        this.rank.set(this.find(x), this.rank.get(this.find(x)) + 1);
      }
    }
  }
}
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const map = Array(26)
    .fill(0)
    .map((v, i) => i);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s1.length; i++) {
    const x = s1.charCodeAt(i) - a;
    const y = s2.charCodeAt(i) - a;
    union(x, y);
  }

  let result = '';
  for (const s of baseStr) {
    const c = s.charCodeAt(0) - a;
    result += String.fromCharCode(find(c) + a);
  }
  return result;

  function find(x) {
    if (map[x] === x) {
      return x;
    }

    map[x] = find(map[x]);
    return map[x];
  }
  function union(x, y) {
    x = find(x);
    y = find(y);
    if (x === y) return;
    if (x > y) {
      map[x] = y;
    } else {
      map[y] = x;
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
