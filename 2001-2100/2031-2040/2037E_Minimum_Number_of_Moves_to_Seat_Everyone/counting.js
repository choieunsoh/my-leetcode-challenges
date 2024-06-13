// 2037. Minimum Number of Moves to Seat Everyone
// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/
// T.C.: O(n + m)
// S.C.: O(m)
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const n = seats.length;
  const maxPosition = Math.max(...seats, ...students);
  const differences = new Array(maxPosition).fill(0);
  for (let i = 0; i < n; i++) {
    differences[seats[i] - 1]++;
    differences[students[i] - 1]--;
  }

  let result = 0;
  let unmatched = 0;
  for (const diff of differences) {
    result += Math.abs(unmatched);
    unmatched += diff;
  }

  return result;
};

var seats = [3, 1, 5],
  students = [2, 7, 4];
var expected = 4;
var result = minMovesToSeat(seats, students);
console.log(result, result === expected);

var seats = [4, 1, 5, 9],
  students = [1, 3, 2, 6];
var expected = 7;
var result = minMovesToSeat(seats, students);
console.log(result, result === expected);

var seats = [2, 2, 6, 6],
  students = [1, 3, 2, 6];
var expected = 4;
var result = minMovesToSeat(seats, students);
console.log(result, result === expected);
