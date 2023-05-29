// 2618. Check if Object Instance of Class
// https://leetcode.com/problems/check-if-object-instance-of-class/
/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== 'function') {
    return false;
  }

  let currPotentialPrototype = Object.getPrototypeOf(obj);
  while (currPotentialPrototype !== null) {
    if (currPotentialPrototype === classFunction.prototype) return true;
    currPotentialPrototype = Object.getPrototypeOf(currPotentialPrototype);
  }

  return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

var func = () => checkIfInstanceOf(new Date(), Date);
var expected = true;
var result = func();
console.log(result, result === expected);

var func = () => {
  class Animal {}
  class Dog extends Animal {}
  return checkIfInstanceOf(new Dog(), Animal);
};
var expected = true;
var result = func();
console.log(result, result === expected);

var func = () => checkIfInstanceOf(Date, Date);
var expected = false;
var result = func();
console.log(result, result === expected);

var func = () => checkIfInstanceOf(5, Number);
var expected = true;
var result = func();
console.log(result, result === expected);
