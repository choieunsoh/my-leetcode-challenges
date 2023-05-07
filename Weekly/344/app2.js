var FrequencyTracker = function () {
  this.counter = new Map();
  this.freq = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function (number) {
  const count = this.counter.get(number);
  if (count !== undefined) {
    const list = this.freq.get(count);
    list.delete(number);
    if (list.size === 0) {
      this.freq.delete(count);
    } else {
      this.freq.set(count, list);
    }

    const list2 = this.freq.get(count + 1) ?? new Set();
    list2.add(number);
    this.freq.set(count + 1, list2);

    this.counter.set(number, count + 1);
  } else {
    const count = 1;
    this.counter.set(number, count);
    const list = this.freq.get(count) ?? new Set();
    list.add(number);
    this.freq.set(count, list);
  }
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function (number) {
  if (!this.counter.has(number)) return;
  const count = this.counter.get(number);

  if (count === 1) {
    const list = this.freq.get(count);
    list.delete(number);
    if (list.size === 0) {
      this.freq.delete(count);
    } else {
      this.freq.set(count, list);
    }

    this.counter.delete(number);
  } else {
    const list = this.freq.get(count);
    list.delete(number);
    this.freq.set(count, list);

    const list2 = this.freq.get(count - 1) ?? new Set();
    list2.add(number);
    this.freq.set(count - 1, list2);

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

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
var obj = new FrequencyTracker();
console.log(obj.hasFrequency(1));
obj.add(3);
console.log(obj.hasFrequency(1));
console.log(obj.hasFrequency(1));
obj.add(6);
obj.add(2);
obj.add(6);
obj.deleteOne(6);
obj.deleteOne(6);
console.log(obj.hasFrequency(2));
console.log(obj);
obj.add(2);
console.log(obj.hasFrequency(2));
console.log(obj.hasFrequency(1));
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
