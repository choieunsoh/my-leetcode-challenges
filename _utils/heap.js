class HeapItem {
  constructor(item, priority = item) {
    this.item = item;
    this.priority = priority;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item, priority = item) {
    this.heap.push(new HeapItem(item, priority));
    this.bubble_up();
  }

  pop() {
    const element = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.bubble_down();
    return element;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  bubble_up() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent.priority <= element.priority) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubble_down() {
    let index = 0;
    let min = index;
    const n = this.heap.length;

    while (index < n) {
      const left = 2 * index + 1;
      const right = left + 1;

      if (left < n && this.heap[left].priority < this.heap[min].priority) {
        min = left;
      }
      if (right < n && this.heap[right].priority < this.heap[min].priority) {
        min = right;
      }

      if (min === index) break;
      [this.heap[min], this.heap[index]] = [this.heap[index], this.heap[min]];
      index = min;
    }
  }
}

// https://github.com/mourner/tinyqueue/blob/master/index.js
class TinyQueue {
  constructor(data = [], compare = defaultCompare) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
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

  peek() {
    return this.data[0];
  }

  _up(pos) {
    const { data, compare } = this;
    const item = data[pos];

    while (pos > 0) {
      const parent = (pos - 1) >> 1;
      const current = data[parent];
      if (compare(item, current) >= 0) break;
      data[pos] = current;
      pos = parent;
    }

    data[pos] = item;
  }

  _down(pos) {
    const { data, compare } = this;
    const halfLength = this.length >> 1;
    const item = data[pos];

    while (pos < halfLength) {
      let left = (pos << 1) + 1;
      let best = data[left];
      const right = left + 1;

      if (right < this.length && compare(data[right], best) < 0) {
        left = right;
        best = data[right];
      }
      if (compare(best, item) >= 0) break;

      data[pos] = best;
      pos = left;
    }

    data[pos] = item;
  }
}

function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

module.exports = {
  HeapItem,
  MinHeap,
  TinyQueue,
};
