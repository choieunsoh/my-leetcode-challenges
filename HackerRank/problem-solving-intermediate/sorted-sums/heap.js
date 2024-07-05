// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
function sortedSum(nums) {
  const MOD = 10e9 + 7;
  const minHeap = new MinHeap();
  let currFn = 0;
  let sum = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i]);
    const pos = minHeap.rank(nums[i]) + 1;
    const greater = total - minHeap.sum();
    currFn = (currFn + pos * nums[i] + greater) % MOD;
    sum = (sum + currFn) % MOD;
    total += nums[i];
  }

  return sum;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest !== index) {
        [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
        index = smallest;
      } else {
        break;
      }
    }
  }

  get size() {
    return this.heap.length;
  }

  sum() {
    return this.heap.reduce((acc, val) => acc + val, 0);
  }

  rank(val) {
    let count = 0;
    for (let element of this.heap) {
      if (element < val) {
        count++;
      }
    }
    return count;
  }
}

// Example usage:
let a = [4, 3, 2, 1];
console.log(sortedSum(a)); // Output will depend on the array input

var nums = [4, 3, 2, 1];
var expected = 65;
// 4
// 3 4
// 2 3 4
// 1 2 3 4
var result = sortedSum(nums);
console.log(result, result === expected);

var nums = [9, 5, 8];
var expected = 80;
// 9
// 5 9
// 5 8 9
var result = sortedSum(nums);
console.log(result, result === expected);

var nums = [5, 9];
var expected = 28;
// 5
// 5 9
var result = sortedSum(nums);
console.log(result, result === expected);

console.log((6).toString(2));
console.log((-6).toString(2));
console.log((6 & -6).toString(2));
