// https://leetcode.com/problems/find-the-town-judge/
// 997. Find the Town Judge
var findJudge = function (n: number, trust: number[][]): number {
  const people = Array(n + 1).fill(0);
  for (const [a, b] of trust) {
    people[a]--;
    people[b]++;
  }

  for (let i = 1; i <= people.length; i++) {
    if (people[i] === n - 1) return i;
  }

  return -1;
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
  trust: number[][] = [];
var expected = -1;
var result = findJudge(n, trust);
console.log(result, result === expected);

var n = 1,
  trust: number[][] = [];
var expected = 1;
var result = findJudge(n, trust);
console.log(result, result === expected);
