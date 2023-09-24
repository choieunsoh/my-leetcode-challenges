// 1349. Maximum Students Taking Exam
// https://leetcode.com/problems/maximum-students-taking-exam/
/**
 * @param {character[][]} seats
 * @return {number}
 */
var maxStudents = function (seats) {
  const memo = new Map();
  const m = seats[0].length;
  return place('', 0);

  function getRowPossibilities(prevRow, curRow) {
    const allPossibilities = { [-1]: [''] };
    for (let i = 0; i < m; i++) {
      allPossibilities[i] = [];
      for (const possibility of allPossibilities[i - 1]) {
        // don't place a student
        allPossibilities[i].push(possibility + curRow[i]);

        // if possible, place a student
        if (curRow[i] === '.' && prevRow[i - 1] !== '1' && prevRow[i + 1] !== '1' && possibility[i - 1] !== '1') {
          allPossibilities[i].push(possibility + '1');
        }
      }
    }
    return allPossibilities[m - 1];
  }

  function place(prevRow, curRowIndex) {
    if (curRowIndex === seats.length) {
      return 0;
    }

    const key = prevRow + curRowIndex;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let max = 0;
    const allPossibilities = getRowPossibilities(prevRow, seats[curRowIndex]);
    allPossibilities.forEach((pos) => {
      max = Math.max(max, place(pos, curRowIndex + 1) + pos.split('1').length - 1);
    });

    memo.set(key, max);
    return max;
  }
};

var seats = [
  ['#', '.', '#', '#', '.', '#'],
  ['.', '#', '#', '#', '#', '.'],
  ['#', '.', '#', '#', '.', '#'],
];
var expected = 4;
var result = maxStudents(seats);
console.log(result, result === expected);

var seats = [
  ['.', '#'],
  ['#', '#'],
  ['#', '.'],
  ['#', '#'],
  ['.', '#'],
];
var expected = 3;
var result = maxStudents(seats);
console.log(result, result === expected);

var seats = [
  ['#', '.', '.', '.', '#'],
  ['.', '#', '.', '#', '.'],
  ['.', '.', '#', '.', '.'],
  ['.', '#', '.', '#', '.'],
  ['#', '.', '.', '.', '#'],
];
var expected = 10;
var result = maxStudents(seats);
console.log(result, result === expected);
