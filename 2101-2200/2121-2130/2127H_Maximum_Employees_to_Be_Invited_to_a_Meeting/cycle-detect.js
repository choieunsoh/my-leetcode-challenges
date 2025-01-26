// 2127. Maximum Employees to Be Invited to a Meeting
// https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
  const numPeople = favorite.length;
  const graph = Array.from({ length: numPeople }, () => []);
  for (let person = 0; person < numPeople; person++) {
    graph[favorite[person]].push(person);
  }

  let longestCycle = 0;
  let twoCycleInvitations = 0;
  const visited = new Array(numPeople).fill(false);

  // Find all cycles in the graph
  for (let person = 0; person < numPeople; person++) {
    if (visited[person]) continue;

    // Track visited people and their distances
    const visitedPeople = new Map();
    let currentPerson = person;
    let distance = 0;
    while (true) {
      if (visited[currentPerson]) break;
      visited[currentPerson] = true;
      visitedPeople.set(currentPerson, distance++);
      const nextPerson = favorite[currentPerson];

      // Cycle detected
      if (visitedPeople.has(nextPerson)) {
        const cycleLength = distance - visitedPeople.get(nextPerson);
        longestCycle = Math.max(longestCycle, cycleLength);

        // Handle cycles of length 2
        if (cycleLength === 2) {
          const visitedNodes = new Set([currentPerson, nextPerson]);
          twoCycleInvitations += 2 + bfs(nextPerson, visitedNodes) + bfs(currentPerson, visitedNodes);
        }
        break;
      }
      currentPerson = nextPerson;
    }
  }
  return Math.max(longestCycle, twoCycleInvitations);

  function bfs(startNode, visitedNodes) {
    // Queue to store nodes and their distances
    let queue = [[startNode, 0]];
    let maxDistance = 0;
    while (queue.length) {
      const nextQueue = [];
      for (const [currentNode, currentDistance] of queue) {
        for (const neighbor of graph[currentNode]) {
          if (visitedNodes.has(neighbor)) continue;
          visitedNodes.add(neighbor);
          nextQueue.push([neighbor, currentDistance + 1]);
          maxDistance = Math.max(maxDistance, currentDistance + 1);
        }
      }
      queue = nextQueue;
    }
    return maxDistance;
  }
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
