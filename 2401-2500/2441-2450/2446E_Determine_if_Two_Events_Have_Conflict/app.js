// 2446. Determine if Two Events Have Conflict
// https://leetcode.com/problems/determine-if-two-events-have-conflict/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  if (event1[0] > event2[0]) return haveConflict(event2, event1);
  return event1[1] >= event2[0];
};

var event1 = ['01:15', '02:00'],
  event2 = ['02:00', '03:00'];
var expected = true;
var result = haveConflict(event1, event2);
console.log(result, result === expected);

var event1 = ['01:00', '02:00'],
  event2 = ['01:20', '03:00'];
var expected = true;
var result = haveConflict(event1, event2);
console.log(result, result === expected);

var event1 = ['10:00', '11:00'],
  event2 = ['14:00', '15:00'];
var expected = false;
var result = haveConflict(event1, event2);
console.log(result, result === expected);

var event1 = ['14:00', '15:00'],
  event2 = ['10:00', '11:00'];
var expected = false;
var result = haveConflict(event1, event2);
console.log(result, result === expected);
