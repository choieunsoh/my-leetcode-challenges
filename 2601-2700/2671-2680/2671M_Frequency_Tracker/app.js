// 2671. Frequency Tracker
// https://leetcode.com/problems/frequency-tracker/
var FrequencyTracker = function () {
  this.counter = new Map();
  this.freq = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  const count = this.counter.get(number) ?? 0;
  if (count > 0) {
    this.__decreaseFrequency(number, count);
  }
  this.__increaseFrequency(number, count + 1);
  this.counter.set(number, count + 1);
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  if (!this.counter.has(number)) return;
  const count = this.counter.get(number);
  this.__decreaseFrequency(number, count);
  if (count === 1) {
    this.counter.delete(number);
  } else {
    this.__increaseFrequency(number, count - 1);
    this.counter.set(number, count - 1);
  }
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function (frequency) {
  const list = this.freq.get(frequency) ?? new Set();
  return list.size > 0;
};

FrequencyTracker.prototype.__increaseFrequency = function (number, frequency) {
  const list = this.freq.get(frequency) ?? new Set();
  list.add(number);
  this.freq.set(frequency, list);
};

FrequencyTracker.prototype.__decreaseFrequency = function (number, frequency) {
  const list = this.freq.get(frequency);
  list.delete(number);
  this.freq.set(frequency, list);
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
var obj = new FrequencyTracker();
console.log(obj.hasFrequency(1), false);
obj.add(3);
console.log(obj.hasFrequency(1), true);
console.log(obj.hasFrequency(1), true);
obj.add(6);
obj.add(2);
obj.add(6);
obj.deleteOne(6);
obj.deleteOne(6);
console.log(obj.hasFrequency(2), false);
console.log(obj);
obj.add(2);
console.log(obj.hasFrequency(2), true);
console.log(obj.hasFrequency(1), true);
console.log(obj);
/*
["FrequencyTracker",
"hasFrequency",
"add",
"hasFrequency",
"hasFrequency",
"add",
"add",
"add",
"deleteOne",
"deleteOne",
"hasFrequency",
"add",
"hasFrequency",
"hasFrequency"]
[[],[1],[3],[1],[1],[6],[2],[6],[6],[6],[2],[2],[2],[1]]
*/
