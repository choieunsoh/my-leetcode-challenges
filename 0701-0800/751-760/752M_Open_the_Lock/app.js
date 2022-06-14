// https://leetcode.com/problems/open-the-lock/
// 752. Open the Lock
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set(deadends);

  function turn(current, pos) {
    const next = (Number(current[pos]) + 1) % 10;
    const prev = (Number(current[pos]) + 9) % 10;

    return [
      current.slice(0, pos) + next + current.slice(pos + 1),
      current.slice(0, pos) + prev + current.slice(pos + 1),
    ];
  }

  let count = 0;
  let turns = 0;
  const queue = [];
  if (!visited.has('0000')) {
    queue.push('0000');
    visited.add('0000');
  }

  let found = 0;
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      count++;
      let current = queue.shift();
      //console.log(count, turns, current, found);
      if (current === target) return turns;

      for (let j = 0; j < 4; j++) {
        const [next, prev] = turn(current, j);
        if (!visited.has(next)) {
          queue.push(next);
          visited.add(next);
        } else {
          found++;
        }

        if (!visited.has(prev)) {
          queue.push(prev);
          visited.add(prev);
        } else {
          found++;
        }
      }
    }
    turns++;
  }

  return -1;
};

var deadends = ['0201', '0101', '0102', '1212', '2002'],
  target = '0202';
var expected = 6;
console.log(openLock(deadends, target), expected);
return;
var deadends = ['8888'],
  target = '0009';
var expected = 1;
console.log(openLock(deadends, target), expected);

var deadends = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
  target = '8888';
var expected = -1;
console.log(openLock(deadends, target), expected);

var deadends = ['0000'],
  target = '8888';
var expected = -1;
console.log(openLock(deadends, target), expected);
