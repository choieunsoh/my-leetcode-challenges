// 752. Open the Lock
// https://leetcode.com/problems/open-the-lock/
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const visited = new Set(deadends);
  if (visited.has(target) || visited.has('0000')) return -1;
  if (target === '0000') return 0;

  function turn(current, pos) {
    const next = (Number(current[pos]) + 1) % 10;
    const prev = (Number(current[pos]) + 9) % 10;

    return [
      current.slice(0, pos) + next + current.slice(pos + 1),
      current.slice(0, pos) + prev + current.slice(pos + 1),
    ];
  }

  let turns = 0;
  let queue = ['0000'];
  visited.add('0000');
  while (queue.length > 0) {
    const qq = [];
    for (let i = 0; i < queue.length; i++) {
      const current = queue[i];
      if (current === target) return turns;

      for (let j = 0; j < 4; j++) {
        const [next, prev] = turn(current, j);
        if (next === target || prev === target) return turns + 1;

        if (!visited.has(next)) {
          qq.push(next);
          visited.add(next);
        }

        if (!visited.has(prev)) {
          qq.push(prev);
          visited.add(prev);
        }
      }
    }
    turns++;
    queue = qq;
  }

  return -1;
};

var deadends = ['0201', '0101', '0102', '1212', '2002'],
  target = '0202';
var expected = 6;
console.log(openLock(deadends, target), expected);

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
