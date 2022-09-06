// https://leetcode.com/problems/find-the-town-judge/
// 997. Find the Town Judge
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const people = Array(n + 1).fill(0);
  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];
    people[a] -= 1;
    people[b] += 1;
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
  trust = [];
var expected = -1;
var result = findJudge(n, trust);
console.log(result, result === expected);

var n = 1,
  trust = [];
var expected = 1;
var result = findJudge(n, trust);
console.log(result, result === expected);
