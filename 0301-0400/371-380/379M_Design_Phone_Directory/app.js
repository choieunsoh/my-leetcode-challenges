// 379. Design Phone Directory
// https://leetcode.com/problems/design-phone-directory/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.maxNums = maxNumbers;
  this.availableNums = Array.from({ length: maxNumbers }, (_, i) => maxNumbers - i - 1);
  this.usedNums = new Set();
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  if (this.availableNums.length === 0) {
    return -1;
  }

  const num = this.availableNums.pop();
  this.usedNums.add(num);
  return num;
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return !this.usedNums.has(number);
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (this.usedNums.has(number)) {
    this.usedNums.delete(number);
    this.availableNums.push(number);
  }
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
