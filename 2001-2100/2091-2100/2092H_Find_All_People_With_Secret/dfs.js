// 2092. Find All People With Secret
// https://leetcode.com/problems/find-all-people-with-secret/description/
// T.C.: O((n + m) * m)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  const graph = Array.from({ length: n }, () => []);
  for (const [x, y, t] of meetings) {
    graph[x].push([y, t]);
    graph[y].push([x, t]);
  }

  const earliest = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  earliest[0] = 0;
  earliest[firstPerson] = 0;
  let stack = [
    [0, 0],
    [firstPerson, 0],
  ];

  while (stack.length) {
    const [person, time] = stack.pop();
    for (const [nextPerson, nextTime] of graph[person]) {
      if (nextTime >= time && earliest[nextPerson] > nextTime) {
        earliest[nextPerson] = nextTime;
        stack.push([nextPerson, nextTime]);
      }
    }
  }

  const result = [];
  for (let i = 0; i < earliest.length; i++) {
    if (earliest[i] !== Number.MAX_SAFE_INTEGER) {
      result.push(i);
    }
  }
  return result;
};

var n = 6,
  meetings = [
    [1, 2, 5],
    [2, 3, 8],
    [1, 5, 10],
  ],
  firstPerson = 1;
var expected = [0, 1, 2, 3, 5];
var result = findAllPeople(n, meetings, firstPerson);
console.log(result, result.sort().join() === expected.sort().join());

var n = 4,
  meetings = [
    [3, 1, 3],
    [1, 2, 2],
    [0, 3, 3],
  ],
  firstPerson = 3;
var expected = [0, 1, 3];
var result = findAllPeople(n, meetings, firstPerson);
console.log(result, result.sort().join() === expected.sort().join());

var n = 5,
  meetings = [
    [3, 4, 2],
    [1, 2, 1],
    [2, 3, 1],
  ],
  firstPerson = 1;
var expected = [0, 1, 2, 3, 4];
var result = findAllPeople(n, meetings, firstPerson);
console.log(result, result.sort().join() === expected.sort().join());
