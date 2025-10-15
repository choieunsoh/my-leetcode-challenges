// 2409. Count Days Spent Together
// https://leetcode.com/problems/count-days-spent-together/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
  if (!isOverlap(arriveAlice, arriveBob, leaveBob) && !isOverlap(arriveBob, arriveAlice, leaveAlice)) {
    return 0;
  }

  const daysOfMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const maxArrive = arriveAlice > arriveBob ? arriveAlice : arriveBob;
  const minLeave = leaveAlice < leaveBob ? leaveAlice : leaveBob;

  const [arriveMonth, arriveDay] = maxArrive.split('-').map(Number);
  const [leaveMonth, leaveDay] = minLeave.split('-').map(Number);
  if (arriveMonth === leaveMonth) {
    return leaveDay - arriveDay + 1;
  }

  let totalDays = daysOfMonths[arriveMonth] - arriveDay + 1;
  for (let month = arriveMonth + 1; month < leaveMonth; month++) {
    totalDays += daysOfMonths[month];
  }
  totalDays += leaveDay;

  return totalDays;

  function isOverlap(time, arrive, leave) {
    return time >= arrive && time <= leave;
  }
};

var arriveAlice = '08-15',
  leaveAlice = '08-18',
  arriveBob = '08-16',
  leaveBob = '08-19';
var expected = 3;
var result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
console.log(result, result === expected);

var arriveAlice = '10-01',
  leaveAlice = '10-31',
  arriveBob = '11-01',
  leaveBob = '12-31';
var expected = 0;
var result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
console.log(result, result === expected);

var arriveAlice = '08-15',
  leaveAlice = '09-18',
  arriveBob = '08-16',
  leaveBob = '10-19';
var expected = 34;
var result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
console.log(result, result === expected);

var arriveAlice = '01-01',
  leaveAlice = '12-31',
  arriveBob = '01-01',
  leaveBob = '12-31';
var expected = 365;
var result = countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob);
console.log(result, result === expected);
