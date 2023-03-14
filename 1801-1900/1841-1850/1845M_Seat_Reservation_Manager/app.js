// 1845. Seat Reservation Manager
// https://leetcode.com/problems/seat-reservation-manager/
const { MinHeap } = require('../../../_utils/heap');
/**
 * @param {number} n
 */
class SeatManager {
  constructor(n) {
    const seats = Array.from({ length: n }, (_, i) => i + 1);
    this.heap = new MinHeap(seats);
  }

  /**
   * @return {number}
   */
  reserve() {
    return this.heap.pop();
  }

  /**
   * @param {number} seatNumber
   * @return {void}
   */
  unreserve(seatNumber) {
    this.heap.push(seatNumber);
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
var seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
var result = seatManager.reserve(); // All seats are available, so return the lowest numbered seat, which is 1.
console.log(result, result === 1, seatManager.heap.data);
var result = seatManager.reserve(); // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
console.log(result, result === 2, seatManager.heap.data);
seatManager.unreserve(2); // Unreserve seat 2, so now the available seats are [2,3,4,5].
console.log(seatManager.heap.data);
var result = seatManager.reserve(); // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
console.log(result, result === 2, seatManager.heap.data);
var result = seatManager.reserve(); // The available seats are [3,4,5], so return the lowest of them, which is 3.
console.log(result, result === 3, seatManager.heap.data);
var result = seatManager.reserve(); // The available seats are [4,5], so return the lowest of them, which is 4.
console.log(result, result === 4, seatManager.heap.data);
var result = seatManager.reserve(); // The only available seat is seat 5, so return 5.
console.log(result, result === 5, seatManager.heap.data);
seatManager.unreserve(5); // Unreserve seat 5, so now the available seats are [5].
console.log(seatManager.heap.data);

var seatManager = new SeatManager(4); // Initializes a SeatManager with 5 seats.
var result = seatManager.reserve();
console.log(result, result === 1, seatManager.heap.data);
seatManager.unreserve(1);
console.log(seatManager.heap.data);
var result = seatManager.reserve();
console.log(result, result === 1, seatManager.heap.data);
var result = seatManager.reserve();
console.log(result, result === 2, seatManager.heap.data);
var result = seatManager.reserve();
console.log(result, result === 3, seatManager.heap.data);
seatManager.unreserve(2);
console.log(seatManager.heap.data);
var result = seatManager.reserve();
console.log(result, result === 2, seatManager.heap.data);
seatManager.unreserve(1);
console.log(seatManager.heap.data);
var result = seatManager.reserve();
console.log(result, result === 1, seatManager.heap.data);
seatManager.unreserve(2);
console.log(seatManager.heap.data);
