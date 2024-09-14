// 2534. Time Taken to Cross the Door
// https://leetcode.com/problems/time-taken-to-cross-the-door/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} arrival
 * @param {number[]} state
 * @return {number[]}
 */
var timeTaken = function (arrival, state) {
  const STATES = { ENTERING: 0, EXITING: 1, UNUSED: -1 };
  const n = arrival.length;

  let currentTime = arrival[0];
  const times = new Array(n);

  let lastPerson = -1;
  let enterIndex = indexAfter(state, STATES.ENTERING);
  let exitIndex = indexAfter(state, STATES.EXITING);

  while (enterIndex < n && exitIndex < n) {
    currentTime = Math.max(currentTime, Math.min(arrival[enterIndex], arrival[exitIndex]));

    const enteringQueued = arrival[enterIndex] <= currentTime;
    const exitingQueued = arrival[exitIndex] <= currentTime;

    if (enteringQueued && exitingQueued && times[lastPerson] === currentTime - 1) {
      if (state[lastPerson] === STATES.ENTERING) {
        letEnter();
      } else {
        letExit();
      }
    } else if (exitingQueued) {
      letExit();
    } else {
      letEnter();
    }
  }

  while (enterIndex < n) {
    letEnter();
  }
  while (exitIndex < n) {
    letExit();
  }

  return times;

  function indexAfter(arr, target, after = -1) {
    for (let i = after + 1; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return arr.length;
  }

  function letEnter() {
    currentTime = Math.max(currentTime, arrival[enterIndex]);
    lastPerson = enterIndex;
    times[enterIndex] = currentTime++;
    enterIndex = indexAfter(state, STATES.ENTERING, enterIndex);
  }

  function letExit() {
    currentTime = Math.max(currentTime, arrival[exitIndex]);
    lastPerson = exitIndex;
    times[exitIndex] = currentTime++;
    exitIndex = indexAfter(state, STATES.EXITING, exitIndex);
  }
};

var arrival = [0, 1, 1, 2, 4],
  state = [0, 1, 0, 0, 1];
var expected = [0, 3, 1, 2, 4];
var result = timeTaken(arrival, state);
console.log(result, result.join() === expected.join());

var arrival = [0, 0, 0],
  state = [1, 0, 1];
var expected = [0, 2, 1];
var result = timeTaken(arrival, state);
console.log(result, result.join() === expected.join());

var arrival = [0, 1, 1, 2, 4],
  state = [0, 1, 1, 0, 1];
var expected = [0, 1, 2, 3, 4];
var result = timeTaken(arrival, state);
console.log(result, result.join() === expected.join());

var arrival = [0, 0, 0],
  state = [0, 0, 0];
var expected = [0, 1, 2];
var result = timeTaken(arrival, state);
console.log(result, result.join() === expected.join());
