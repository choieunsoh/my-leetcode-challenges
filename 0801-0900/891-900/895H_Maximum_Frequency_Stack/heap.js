// 895. Maximum Frequency Stack
// https://leetcode.com/problems/maximum-frequency-stack/
class FreqStack {
  constructor() {
    this.data = [];
    this.length = 0;
    this.timestamp = 0;
    this.freq = new Map();
    this.comparer = (a, b) => {
      if (a[0] === b[0]) {
        return b[1] - a[1];
      }
      return b[0] - a[0];
    };
  }
  push(val) {
    const count = this.freq.get(val) ?? 0;
    this.freq.set(val, count + 1);
    this._push([count + 1, this.timestamp++, val]);
  }
  pop() {
    const top = this.data[0];
    const count = this.freq.get(top[2]);
    this.freq.set(top[2], count - 1);
    this._pop();
    return top[2];
  }
  _push(item) {
    this.data.push(item);
    this.length = this.data.length;
    this._up(this.length - 1);
  }
  _pop() {
    if (this.length === 0) return undefined;
    const top = this.data[0];
    const bottom = this.data.pop();
    this.length = this.data.length;
    if (this.length > 0) {
      this.data[0] = bottom;
      this._down(0);
    }
    return top;
  }
  _down(pos) {
    const { data, comparer } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];
    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      const right = left + 1;
      let best = data[left];
      if (right < this.length && comparer(data[right], best) < 0) {
        left = right;
        best = data[left];
      }
      if (comparer(best, item) >= 0) break;
      data[pos] = best;
      pos = left;
    }
    data[pos] = item;
  }
  _up(pos) {
    const { data, comparer } = this;
    const item = data[pos];
    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (comparer(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }
    data[pos] = item;
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
var freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
console.log(freqStack.pop()); // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
console.log(freqStack.pop()); // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
console.log(freqStack.pop()); // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
console.log(freqStack.pop()); // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].
