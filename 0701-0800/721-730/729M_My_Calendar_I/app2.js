// 729. My Calendar I
// https://leetcode.com/problems/my-calendar-i/

class MyCalendar {
  constructor() {
    this.events = [];
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {boolean}
   */
  book(start, end) {
    let left = 0;
    let right = this.events.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      const event = this.events[mid];
      if (start < event[1] && end > event[0]) return false;
      if (start >= event[0]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    this.events.splice(left, 0, [start, end]);
    return true;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
var events = [
  [10, 20, true],
  [15, 25, false],
  [20, 30, true],
];
var obj = new MyCalendar();
for (const [start, end, expected] of events) {
  const result = obj.book(start, end);
  console.log(result, result === expected);
}
