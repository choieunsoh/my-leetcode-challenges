// https://leetcode.com/problems/keys-and-rooms/
// 841. Keys and Rooms
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();
  const queue = [];
  visited.add(0);
  queue.push(...rooms[0]);

  while (queue.length) {
    const room = queue.shift();
    visited.add(room);

    const keys = rooms[room];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!visited.has(key)) {
        queue.push(key);
      }
    }
  }

  return visited.size === rooms.length;
};

var rooms = [[1], [2], [3], []];
var expected = true;
console.log(canVisitAllRooms(rooms), expected);

var rooms = [[1, 3], [3, 0, 1], [2], [0]];
var expected = false;
console.log(canVisitAllRooms(rooms), expected);
