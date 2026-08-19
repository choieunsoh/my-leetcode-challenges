// 1386. Cinema Seat Allocation
// https://leetcode.com/problems/cinema-seat-allocation/description/
// T.C.: O(r)
// S.C.: O(r)
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  const left = 0b11110000;
  const middle = 0b11000011;
  const right = 0b00001111;
  const occupied = new Map();
  for (const seat of reservedSeats) {
    if (seat[1] >= 2 && seat[1] <= 9) {
      const row = seat[0];
      if (!occupied.has(row)) {
        occupied.set(row, 0);
      }
      occupied.set(row, occupied.get(row) | (1 << (seat[1] - 2)));
    }
  }

  let result = (n - occupied.size) * 2;
  for (const bitmask of occupied.values()) {
    if ((bitmask | left) === left || (bitmask | middle) === middle || (bitmask | right) === right) {
      result++;
    }
  }
  return result;
};

var n = 3,
  reservedSeats = [
    [1, 2],
    [1, 3],
    [1, 8],
    [2, 6],
    [3, 1],
    [3, 10],
  ];
var expected = 4;
var result = maxNumberOfFamilies(n, reservedSeats);
console.log(result, result === expected);

var n = 2,
  reservedSeats = [
    [2, 1],
    [1, 8],
    [2, 6],
  ];
var expected = 2;
var result = maxNumberOfFamilies(n, reservedSeats);
console.log(result, result === expected);

var n = 4,
  reservedSeats = [
    [4, 3],
    [1, 4],
    [4, 6],
    [1, 7],
  ];
var expected = 4;
var result = maxNumberOfFamilies(n, reservedSeats);
console.log(result, result === expected);
