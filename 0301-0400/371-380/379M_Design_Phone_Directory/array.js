// 379. Design Phone Directory
// https://leetcode.com/problems/design-phone-directory/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.slots = new Array(maxNumbers).fill(true);
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  const slotIndex = this.slots.findIndex(Boolean);
  if (slotIndex !== -1) {
    this.slots[slotIndex] = false;
  }
  return slotIndex;
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return this.slots[number];
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  this.slots[number] = true;
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'PhoneDirectory': {
        obj = new PhoneDirectory(...args);
        break;
      }
      default: {
        result = obj[op](...args) ?? null;
        break;
      }
    }
    console.log(i, op, result, result === expected);
  }
}

var ops = ['PhoneDirectory', 'get', 'get', 'check', 'get', 'check', 'release', 'check'],
  inputs = [[3], [], [], [2], [], [2], [2], [2]],
  outputs = [null, 0, 1, true, 2, false, null, true];
run(ops, inputs, outputs);
