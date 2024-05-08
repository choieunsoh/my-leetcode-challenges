// 849. Maximize Distance to Closest Person
// https://leetcode.com/problems/maximize-distance-to-closest-person/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const n = seats.length;
  let prevPersonIndex = seats[0] === 1 ? 0 : -1;
  let emptyIndex = seats[0] === 0 ? 0 : -1;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (seats[i] === 0) {
      emptyIndex = i;
      continue;
    }

    let distance = emptyIndex - prevPersonIndex;
    if (prevPersonIndex !== -1) {
      distance = (distance + 1) >> 1;
    }

    result = Math.max(result, distance);
    prevPersonIndex = i;
  }

  if (seats[n - 1] === 0) {
    result = Math.max(result, n - prevPersonIndex - 1);
  }
  return result;
};

var seats = [1, 0, 0, 0, 1, 0, 1];
var expected = 2;
var result = maxDistToClosest(seats);
console.log(result, result === expected);

var seats = [1, 0, 0, 0];
var expected = 3;
var result = maxDistToClosest(seats);
console.log(result, result === expected);

var seats = [0, 0, 0, 1];
var expected = 3;
var result = maxDistToClosest(seats);
console.log(result, result === expected);

var seats = [0, 1];
var expected = 1;
var result = maxDistToClosest(seats);
console.log(result, result === expected);
