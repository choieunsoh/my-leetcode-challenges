// 841. Keys and Rooms
// https://leetcode.com/problems/keys-and-rooms/
// T.C: O(N + E)
// S.C: O(N)
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Array(rooms.length).fill(false);
  dfs(0);
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) return false;
  }
  return true;

  function dfs(roomIndex) {
    visited[roomIndex] = true;
    for (const key of rooms[roomIndex]) {
      if (!visited[key]) {
        dfs(key);
      }
    }
  }
};

var rooms = [[1], [2], [3], []];
var expected = true;
var result = canVisitAllRooms(rooms);
console.log(result, result === expected);

var rooms = [[1, 3], [3, 0, 1], [2], [0]];
var expected = false;
var result = canVisitAllRooms(rooms);
console.log(result, result === expected);
