// 752. Open the Lock
// https://leetcode.com/problems/open-the-lock/
var openLock = function (deadends: string[], target: string): number {
  const visited = new Set(deadends);

  function turn(current: string, pos: number): string[] {
    const next = (Number(current[pos]) + 1) % 10;
    const prev = (Number(current[pos]) + 9) % 10;

    return [
      current.slice(0, pos) + next + current.slice(pos + 1),
      current.slice(0, pos) + prev + current.slice(pos + 1),
    ];
  }

  let turns = 0;
  const queue: string[] = [];
  if (!visited.has('0000')) {
    queue.push('0000');
    visited.add('0000');
  }

  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift()!;
      if (current === target) return turns;

      for (let j = 0; j < 4; j++) {
        const nextTurns = turn(current, j);
        for (const next of nextTurns)
          if (!visited.has(next)) {
            queue.push(next);
            visited.add(next);
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
var result = openLock(deadends, target);
console.log(result, result === expected);

var deadends = ['8888'],
  target = '0009';
var expected = 1;
var result = openLock(deadends, target);
console.log(result, result === expected);

var deadends = ['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'],
  target = '8888';
var expected = -1;
var result = openLock(deadends, target);
console.log(result, result === expected);

var deadends = ['0000'],
  target = '8888';
var expected = -1;
var result = openLock(deadends, target);
console.log(result, result === expected);
