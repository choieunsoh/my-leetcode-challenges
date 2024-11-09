// 715. Range Module
// https://leetcode.com/problems/range-module/description/
// T.C.: Add/Remove O(n), Query O(log n)
// S.C.: O(n)

class RangeModule {
  constructor() {
    this.intervals = [];
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {void}
   */
  addRange(left, right) {
    const newInterval = [left, right];
    const mergedIntervals = [];
    let i = 0;

    // Skip all intervals that end before the new interval starts
    while (i < this.intervals.length && this.intervals[i][1] < left) {
      mergedIntervals.push(this.intervals[i]);
      i++;
    }

    // Merge all overlapping intervals
    while (i < this.intervals.length && this.intervals[i][0] <= right) {
      newInterval[0] = Math.min(newInterval[0], this.intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], this.intervals[i][1]);
      i++;
    }
    mergedIntervals.push(newInterval); // Add the merged interval

    // Add the rest of the intervals
    while (i < this.intervals.length) {
      mergedIntervals.push(this.intervals[i]);
      i++;
    }

    this.intervals = mergedIntervals; // Update the intervals to the merged list
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {boolean}
   */
  queryRange(left, right) {
    let low = 0;
    let high = this.intervals.length - 1;

    // Binary search for the interval that might contain the range
    while (low <= high) {
      const mid = (low + high) >>> 1;
      if (this.intervals[mid][0] <= left && this.intervals[mid][1] >= right) {
        return true; // The range is fully covered by this interval
      } else if (this.intervals[mid][0] > right) {
        high = mid - 1; // Search left
      } else {
        low = mid + 1; // Search right
      }
    }

    return false; // No interval covers the range
  }

  /**
   * @param {number} left
   * @param {number} right
   * @return {void}
   */
  removeRange(left, right) {
    const newIntervals = [];
    let i = 0;

    // Skip all intervals that end before the range starts
    while (i < this.intervals.length && this.intervals[i][1] <= left) {
      newIntervals.push(this.intervals[i]);
      i++;
    }

    // Handle overlapping intervals
    while (i < this.intervals.length && this.intervals[i][0] < right) {
      // If there's a left segment before the range to remove
      if (this.intervals[i][0] < left) {
        newIntervals.push([this.intervals[i][0], left]);
      }
      // If there's a right segment after the range to remove
      if (this.intervals[i][1] > right) {
        newIntervals.push([right, this.intervals[i][1]]);
      }
      i++;
    }

    // Add the remaining intervals
    while (i < this.intervals.length) {
      newIntervals.push(this.intervals[i]);
      i++;
    }

    this.intervals = newIntervals; // Update the intervals to the new list
  }
}

/**
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

function run(ops, inputs, outputs) {
  const obj = new RangeModule();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    result = obj[op](...args) ?? null;
    console.log(i, op, args, result, result === expected);
  }
}

var ops = ['RangeModule', 'addRange', 'removeRange', 'queryRange', 'queryRange', 'queryRange'],
  inputs = [[], [10, 20], [14, 16], [10, 14], [13, 15], [16, 17]],
  outputs = [null, null, null, true, false, true];
run(ops, inputs, outputs);
