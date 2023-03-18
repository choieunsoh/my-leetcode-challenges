// 841. Keys and Rooms
// https://leetcode.com/problems/keys-and-rooms/
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = Array(rooms.length).fill(false);
  let queue = [0];
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const room = queue[i];
      visited[room] = true;
      const keys = rooms[room];
      for (const key of keys) {
        if (visited[key]) continue;
        newQueue.push(key);
      }
    }
    queue = newQueue;
  }
  return visited.every(Boolean);
};

var rooms = [[1], [2], [3], []];
var expected = true;
var result = canVisitAllRooms(rooms);
console.log(result, result === expected);

var rooms = [[1, 3], [3, 0, 1], [2], [0]];
var expected = false;
var result = canVisitAllRooms(rooms);
console.log(result, result === expected);
