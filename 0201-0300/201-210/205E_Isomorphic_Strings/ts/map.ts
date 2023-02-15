// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/
var isIsomorphic = function (s: string, t: string): boolean {
  const dictS = new Map<string, number>();
  const dictT = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    dictS.set(s.charAt(i), i);
    dictT.set(t.charAt(i), i);
  }

  return [...dictS.values()].join(',') === [...dictT.values()].join(',');
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
