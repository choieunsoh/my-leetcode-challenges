// 2061. Number of Spaces Cleaning Robot Cleaned
// https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/description/
// T.C.: O(m * n)
// S.C.: O(m * n)
/**
 * @param {number[][]} room
 * @return {number}
 */
var numberOfCleanRooms = function (room) {
  const rows = room.length;
  const cols = room[0].length;
  const dirs = {
    u: [-1, 0],
    r: [0, 1],
    d: [1, 0],
    l: [0, -1],
  };
  const nextDirs = {
    u: 'r',
    r: 'd',
    d: 'l',
    l: 'u',
  };

  const states = new Set();
  const cells = new Set();

  let row = 0;
  let col = 0;
  let dir = 'r';
  while (true) {
    const state = toState(row, col, dir);
    if (states.has(state)) break;

    states.add(state);
    cells.add(toCell(row, col));

    const step = dirs[dir];
    const newRow = row + step[0];
    const newCol = col + step[1];
    if (canVisit(newRow, newCol)) {
      [row, col] = [newRow, newCol];
    } else {
      dir = nextDirs[dir];
    }
  }

  return cells.size;

  function inBoard(row, col) {
    return 0 <= row && row < rows && 0 <= col && col < cols;
  }

  function canVisit(row, col) {
    return inBoard(row, col) && room[row][col] === 0;
  }

  function toState(...args) {
    return args.join('|');
  }

  function toCell(...args) {
    return args.join('|');
  }
};

var room = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0],
];
var expected = 7;
var result = numberOfCleanRooms(room);
console.log(result, result === expected);

var room = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 0, 0],
];
var expected = 1;
var result = numberOfCleanRooms(room);
console.log(result, result === expected);

var room = [
  [0, 0, 0, 1],
  [0, 1, 0, 1],
  [1, 0, 0, 0],
];
var expected = 7;
var result = numberOfCleanRooms(room);
console.log(result, result === expected);
