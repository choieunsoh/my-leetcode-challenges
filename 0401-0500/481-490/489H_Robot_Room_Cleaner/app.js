// 489. Robot Room Cleaner
// https://leetcode.com/problems/robot-room-cleaner/
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  const directions = [
    [-1, 0], // Up
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
  ];
  const visited = new Set();
  backtracking(0, 0, 0);

  function goBack() {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  }

  function backtracking(row, col, prev) {
    const cell = `${row},${col}`;
    visited.add(cell);
    robot.clean();
    for (let d = 0; d < 4; d++) {
      const next = (prev + d) % 4;
      const [dRow, dCol] = directions[next];
      const [newRow, newCol] = [row + dRow, col + dCol];
      const newCell = `${newRow},${newCol}`;
      if (!visited.has(newCell) && robot.move()) {
        backtracking(newRow, newCol, next);
        goBack();
      }
      robot.turnRight();
    }
  }
};

var room = [
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ],
  row = 1,
  col = 3;
var expected = 'Robot cleaned all rooms.';

var room = [[1]],
  row = 0,
  col = 0;
var expected = 'Robot cleaned all rooms.';
