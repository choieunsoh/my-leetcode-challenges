// 2127. Maximum Employees to Be Invited to a Meeting
// https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
  const n = favorite.length;
  const inDegree = new Array(n).fill(0);
  for (const fav of favorite) {
    inDegree[fav]++;
  }

  let queue = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const depth = new Array(n).fill(1);
  while (queue.length) {
    const nextQueue = [];
    for (const person of queue) {
      const nextPerson = favorite[person];
      depth[nextPerson] = Math.max(depth[nextPerson], depth[person] + 1);
      if (--inDegree[nextPerson] === 0) nextQueue.push(nextPerson);
    }
    queue = nextQueue;
  }

  let longestCycle = 0;
  let twoCycleInvitations = 0;
  for (let person = 0; person < n; person++) {
    if (inDegree[person] === 0) continue;

    let cycleLength = 0;
    let current = person;
    while (inDegree[current] !== 0) {
      inDegree[current] = 0; // Mark as visited
      cycleLength++;
      current = favorite[current];
    }

    if (cycleLength === 2) {
      // For 2-cycles, add the depth of both nodes
      twoCycleInvitations += depth[person] + depth[favorite[person]];
    } else {
      longestCycle = Math.max(longestCycle, cycleLength);
    }
  }
  return Math.max(longestCycle, twoCycleInvitations);
};

// 0>2 1>2 2>1 3>2
var favorite = [2, 2, 1, 2];
var expected = 3;
var result = maximumInvitations(favorite);
console.log(result, result === expected);

var favorite = [1, 2, 0];
var expected = 3;
var result = maximumInvitations(favorite);
console.log(result, result === expected);

var favorite = [3, 0, 1, 4, 1];
var expected = 4;
var result = maximumInvitations(favorite);
console.log(result, result === expected);

var favorite = [1, 0, 0, 2, 1, 4, 7, 8, 9, 6, 7, 10, 8];
var expected = 6;
var result = maximumInvitations(favorite);
console.log(result, result === expected);

var favorite = [1, 0, 3, 2, 5, 6, 7, 4, 9, 8, 11, 10, 11, 12, 10];
var expected = 11;
var result = maximumInvitations(favorite);
console.log(result, result === expected);

var favorite = [9, 14, 15, 8, 22, 15, 12, 11, 10, 7, 1, 12, 15, 6, 5, 12, 10, 21, 4, 1, 16, 3, 7];
var expected = 15;
var result = maximumInvitations(favorite);
console.log(result, result === expected);
