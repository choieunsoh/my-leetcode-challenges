// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/
var isIsomorphic = function (s: string, t: string): boolean {
  const seen = new Set<string>();
  const dict = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const chS = s.charAt(i);
    const chT = t.charAt(i);
    const mapping = dict.get(chS);
    if (!mapping) {
      if (seen.has(chT)) return false;
      seen.add(chT);
      dict.set(chS, chT);
    } else if (mapping !== chT) {
      return false;
    }
  }

  return true;
};

var s = 'egg',
  t = 'add';
var expected = true;
var result = isIsomorphic(s, t);
console.log(result, result === expected);

var s = 'foo',
  t = 'bar',
  expected = false;
var result = isIsomorphic(s, t);
console.log(result, result === expected);

var s = 'paper',
  t = 'title',
  expected = true;
var result = isIsomorphic(s, t);
console.log(result, result === expected);

var s = 'badc',
  t = 'baba',
  expected = false;
var result = isIsomorphic(s, t);
console.log(result, result === expected);
