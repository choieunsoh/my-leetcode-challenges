// 1167. Minimum Cost to Connect Sticks
// https://leetcode.com/problems/minimum-cost-to-connect-sticks/
// T.C.: O(n log n)
// S.C.: O(n)

var connectSticks = function (sticks: number[]): number {
  let totalCost = 0;
  const heap = new MyMinHeap(sticks);
  while (heap.length > 1) {
    const firstStick = heap.pop()!;
    const secondStick = heap.pop()!;
    const cost = firstStick + secondStick;
    heap.push(cost);
    totalCost += cost;
  }
  return totalCost;
};

type compareFn = (a: number, b: number) => number;
class MyMinHeap {
  public length = 0;
  private data: number[] = [];
  private compare: compareFn;

  constructor(data: number[] = [], compare = (a: number, b: number) => a - b) {
    this.data = data;
    this.length = this.data.length;
    this.compare = compare;

    if (this.length > 0) {
      for (let i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
  }

  push(item: number) {
    this.data.push(item);
    this.length++;
    this._up(this.length - 1);
  }

  pop(): number | undefined {
    if (this.length === 0) return undefined;

    const top = this.data[0];
    const bottom = this.data.pop();
    this.length--;

    if (this.length > 0) {
      this.data[0] = bottom!;
      this._down(0);
    }

    return top;
  }

  peek(): number {
    return this.data[0];
  }

  _up(pos: number): void {
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

  _down(pos: number): void {
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

var sticks = [2, 4, 3];
var expected = 14;
var result = connectSticks(sticks);
console.log(result, result === expected);

var sticks = [1, 8, 3, 5];
var expected = 30;
var result = connectSticks(sticks);
console.log(result, result === expected);

var sticks = [5];
var expected = 0;
var result = connectSticks(sticks);
console.log(result, result === expected);
