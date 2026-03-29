// 379. Design Phone Directory
// https://leetcode.com/problems/design-phone-directory/description/
// T.C.: O(n)
// S.C.: O(n)
const { Queue } = require('@datastructures-js/queue');
/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  // Queue to store all available slots.
  this.slotsAvailableQueue = new Queue();

  // Array to mark if a slot is available.
  this.isSlotAvailable = new Array(maxNumbers).fill(true);

  for (let i = 0; i < maxNumbers; ++i) {
    this.slotsAvailableQueue.enqueue(i);
  }
};

PhoneDirectory.prototype.get = function () {
  // If the queue is empty, it means no slot is available.
  if (this.slotsAvailableQueue.isEmpty()) {
    return -1;
  }

  // Otherwise, remove the first element from the queue,
  // mark that slot as not available and return the slot.
  const slot = this.slotsAvailableQueue.dequeue();
  this.isSlotAvailable[slot] = false;
  return slot;
};

PhoneDirectory.prototype.check = function (number) {
  // Check if the slot at index 'number' is available or not.
  return this.isSlotAvailable[number];
};

PhoneDirectory.prototype.release = function (number) {
  // If the slot is already present in the queue, we don't do anything.
  if (this.isSlotAvailable[number]) {
    return;
  }

  // Otherwise, mark the slot 'number' as available and enqueue it back to the queue.
  this.slotsAvailableQueue.enqueue(number);
  this.isSlotAvailable[number] = true;
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
