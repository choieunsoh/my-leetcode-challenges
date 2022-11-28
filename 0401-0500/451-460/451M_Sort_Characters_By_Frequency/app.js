// 451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/
class Heap {
  constructor(items = []) {
    this.data = items;
    this.length = items.length;
    this.comparer = (a, b) => {
      if (b[1] < a[1]) return -1;
      if (b[1] > a[1]) return 1;
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    };

    for (let i = (this.length >> 1) - 1; i >= 0; i--) {
      this._down(i);
    }
  }
  peak() {
    return this.data[0];
  }
  push(item) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return undefined;
    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;
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
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const count = map.get(s[i]) ?? 0;
    map.set(s[i], count + 1);
  }
  const heap = new Heap([...map.entries()]);
  while (heap.length) {
    const [char, count] = heap.pop();
    result.push(char.repeat(count));
  }
  return result.join('');
};

var s = 'tree';
var expected = 'eert';
var result = frequencySort(s);
console.log(result, result === expected);

var s = 'cccaaa';
var expected = 'aaaccc';
var result = frequencySort(s);
console.log(result, result === expected);

var s = 'Aabb';
var expected = 'bbAa';
var result = frequencySort(s);
console.log(result, result === expected);
