// https://leetcode.com/problems/find-the-town-judge/
// 997. Find the Town Judge
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const people = new Map();
  const judge = new Set();
  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];
    const count = people.get(b) ?? 0;
    people.set(b, count + 1);
    judge.add(a);
  }

  for (const [labeled, count] of people) {
    if (count === n - 1 && !judge.has(Number(labeled))) {
      return labeled;
    }
  }

  return trust.length === n - 1 ? n : -1;
};

var n = 2,
  trust = [[1, 2]];
var expected = 2;
var result = findJudge(n, trust);
console.log(result, result === expected);

var n = 3,
  trust = [
    [1, 3],
    [2, 3],
  ];
var expected = 3;
var result = findJudge(n, trust);
console.log(result, result === expected);

var n = 3,
  trust = [
    [1, 3],
    [2, 3],
    [3, 1],
  ];
var expected = -1;
var result = findJudge(n, trust);
console.log(result, result === expected);

var n = 2,
  trust = [];
var expected = -1;
var result = findJudge(n, trust);
console.log(result, result === expected);

var n = 1,
  trust = [];
var expected = 1;
var result = findJudge(n, trust);
console.log(result, result === expected);
