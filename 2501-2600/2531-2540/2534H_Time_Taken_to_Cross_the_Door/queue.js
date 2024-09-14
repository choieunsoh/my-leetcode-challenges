// 2534. Time Taken to Cross the Door
// https://leetcode.com/problems/time-taken-to-cross-the-door/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} arrival
 * @param {number[]} state
 * @return {number[]}
 */
var timeTaken = function (arrival, state) {
  const STATES = { ENTERING: 0, EXITING: 1, UNUSED: -1 };
  const n = arrival.length;
  const enterQueue = [];
  const exitQueue = [];
  for (let i = 0; i < n; ++i) {
    if (state[i] === STATES.ENTERING) {
      enterQueue.push([arrival[i], i]);
    } else {
      exitQueue.push([arrival[i], i]);
    }
  }
  enterQueue.reverse();
  exitQueue.reverse();

  const INF = Number.MAX_SAFE_INTEGER;
  const result = new Array(n);
  let lastState = STATES.UNUSED;
  let currTime = -1;
  while (enterQueue.length || exitQueue.length) {
    const [enterTime, enterIndex] = enterQueue.at(-1) ?? [INF, -1];
    const [exitTime, exitIndex] = exitQueue.at(-1) ?? [INF, -1];
    if (enterTime > currTime && exitTime > currTime) {
      currTime = Math.min(enterTime, exitTime);
      lastState = STATES.UNUSED;
    } else if (lastState === STATES.UNUSED || lastState === STATES.EXITING) {
      if (exitIndex !== -1 && exitTime <= currTime) {
        exitDoor();
      } else {
        enterDoor();
      }
    } else if (lastState === STATES.ENTERING) {
      if (enterIndex !== -1 && enterTime <= currTime) {
        enterDoor();
      } else {
        exitDoor();
      }
    }
  }

  return result;

  function exitDoor() {
    if (exitQueue.length === 0) return;
    const [, index] = exitQueue.pop();
    result[index] = currTime++;
    lastState = STATES.EXITING;
  }

  function enterDoor() {
    if (enterQueue.length === 0) return;
    const [, index] = enterQueue.pop();
    result[index] = currTime++;
    lastState = STATES.ENTERING;
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
