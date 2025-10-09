// 2728. Count Houses in a Circular Street
// https://leetcode.com/problems/count-houses-in-a-circular-street/
// T.C.: O(n)
// S.C.: O(1)

// Definition for a street.
class Street {
  // @param {number[]} doors
  constructor(doors) {
    this.index = 0;
    this.doors = doors;
  }

  // @return {void}
  openDoor() {
    this.doors[this.index] = 1;
  }

  // @return {void}
  closeDoor() {
    this.doors[this.index] = 0;
  }

  // @return {boolean}
  isDoorOpen() {
    return this.doors[this.index] === 1;
  }

  // @return {void}
  moveRight() {
    this.index = (this.index + 1) % this.doors.length;
  }

  // @return {void}
  moveLeft() {
    this.index = (this.index - 1 + this.doors.length) % this.doors.length;
  }
}

/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 *
 *     @return {void}
 *     openDoor();
 *
 *     @return {void}
 *     closeDoor();
 *
 *     @return {boolean}
 *     isDoorOpen();
 *
 *     @return {void}
 *     moveRight();
 *
 *     @return {void}
 *     moveLeft();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function (street, k) {
  for (let i = 0; i < k; i++) {
    street.closeDoor();
    street.moveRight();
  }

  let houseCount = 0;
  while (!street.isDoorOpen()) {
    street.openDoor();
    street.moveRight();
    houseCount++;
  }
  return houseCount;
};

var street = new Street([0, 0, 0, 0]),
  k = 10;
var expected = 4;
var result = houseCount(street, k);
console.log(result, result === expected);

var street = new Street([1, 0, 1, 1, 0]),
  k = 5;
var expected = 5;
var result = houseCount(street, k);
console.log(result, result === expected);
