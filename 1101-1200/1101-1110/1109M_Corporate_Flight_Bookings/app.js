// https://leetcode.com/problems/corporate-flight-bookings/
// 1109. Corporate Flight Bookings
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const result = Array(n).fill(0);
  for (let i = 0; i < bookings.length; i++) {
    const [first, last, seats] = bookings[i];
    result[first - 1] += seats;
    if (last < n) result[last] -= seats;
  }

  for (let i = 1; i < result.length; i++) {
    result[i] += result[i - 1];
  }
  return result;
};

var bookings = [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ],
  n = 5;
var expected = [10, 55, 45, 25, 25];
var result = corpFlightBookings(bookings, n);
console.log(result, result.join() === expected.join());

var bookings = [
    [1, 2, 10],
    [2, 2, 15],
  ],
  n = 2;
var expected = [10, 25];
var result = corpFlightBookings(bookings, n);
console.log(result, result.join() === expected.join());

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createBooking(maxFlights, maxSeats) {
  var first = random(1, maxFlights);
  var last = random(first, maxFlights);
  var seats = random(1, maxSeats);
  return [first, last, seats];
}

var n = 20000;
var MAX_SEATS = 10000;
var bookings = [];
for (let i = 0; i < n; i++) {
  var booking = createBooking(n, MAX_SEATS);
  bookings.push(booking);
}
console.time('Prefix Sum');
var result = corpFlightBookings(bookings, n);
console.timeEnd('Prefix Sum');
