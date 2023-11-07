// 731. My Calendar II
// https://leetcode.com/problems/my-calendar-ii/
// T.C.: O(n ^ 2)
// S.C.: O(n)

var MyCalendarTwo = function () {
  this.calendar = [];
  this.overlap = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (const [overlapStart, overlapEnd] of this.overlap) {
    // os---e----
    // ---s----oe
    if (start < overlapEnd && end > overlapStart) {
      return false;
    }
  }

  for (const [calendarStart, calendarEnd] of this.calendar) {
    // cs---e----
    // ---s----ce
    if (start < calendarEnd && end > calendarStart) {
      this.overlap.push([Math.max(start, calendarStart), Math.min(end, calendarEnd)]);
    }
  }

  this.calendar.push([start, end]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

var ops = ['MyCalendarTwo', 'book', 'book', 'book', 'book', 'book', 'book'],
  inputs = [[], [10, 20], [50, 60], [10, 40], [5, 15], [5, 10], [25, 55]],
  outputs = [null, true, true, true, false, true, true];
test(ops, inputs, outputs);

function test(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    if (op === 'book') {
      result = obj.book(...args);
    } else {
      obj = new MyCalendarTwo();
    }
    console.log(i, op, args, result, result === expected);
  }
}
