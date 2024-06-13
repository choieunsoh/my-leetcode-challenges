// 2037. Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  const n = seats.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += Math.abs(seats[i] - students[i]);
  }
  return result;
};

// 1 3 5
// 2 4 7
var seats = [3, 1, 5],
  students = [2, 7, 4];
var expected = 4;
var result = minMovesToSeat(seats, students);
console.log(result, result === expected);

// 1 4 5 9
// 1 2 3 6
var seats = [4, 1, 5, 9],
  students = [1, 3, 2, 6];
var expected = 7;
var result = minMovesToSeat(seats, students);
console.log(result, result === expected);

// 2 2 6 6
// 1 2 3 6
var seats = [2, 2, 6, 6],
  students = [1, 3, 2, 6];
var expected = 4;
var result = minMovesToSeat(seats, students);
console.log(result, result === expected);
