// 1603. Design Parking System
// https://leetcode.com/problems/design-parking-system/
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.cars = [big, medium, small];
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  return --this.cars[carType - 1] >= 0;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
var obj = new ParkingSystem(1, 1, 0);
console.log(obj.addCar(1), true);
console.log(obj.addCar(2), true);
console.log(obj.addCar(3), false);
console.log(obj.addCar(1), false);
