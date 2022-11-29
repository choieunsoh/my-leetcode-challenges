// 895. Maximum Frequency Stack
// https://leetcode.com/problems/maximum-frequency-stack/
class FreqStack {
  constructor() {
    this.freq = [];
    this.map = new Map();
    this.maxFreq = 0;
  }
  push(val) {
    const count = (this.map.get(val) ?? 0) + 1;
    this.map.set(val, count);

    if (!this.freq[count]) this.freq[count] = [];
    this.freq[count].push(val);
    this.maxFreq = Math.max(this.maxFreq, count);
  }
  pop() {
    const val = this.freq[this.maxFreq].pop();
    const count = this.map.get(val);
    if (this.freq[count].length === 0) this.maxFreq--;
    this.map.set(val, count - 1);
    return val;
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
