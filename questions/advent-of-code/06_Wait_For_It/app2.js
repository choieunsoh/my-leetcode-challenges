// https://adventofcode.com/2023/day/6

var waitForIt = function (input) {
  const [maxTime, record] = getData(input);
  let minSpeed = 0;
  for (let speed = 1; speed <= (maxTime - 1) / 2; speed++) {
    const timeLeft = maxTime - speed;
    const distance = timeLeft * speed;
    if (distance > record) {
      minSpeed = speed;
      break;
    }
  }
  const maxSpeed = maxTime - minSpeed;
  return maxSpeed - minSpeed + 1;
};

function getData(input) {
  const lines = input.split('\n');
  const [, timeStr] = lines[0].split(':');
  const time = Number(timeStr.replace(/\s/gi, ''));
  const [, distStr] = lines[1].split(':');
  const distance = Number(distStr.replace(/\s/gi, ''));
  return [time, distance];
}

console.time('day-6');
var input = `Time:      7  15   30
Distance:  9  40  200`;
var expected = 71503;
var result = waitForIt(input);
console.log(result, result === expected);

var input = `Time:        54     81     70     88
Distance:   446   1292   1035   1007`;
var expected = 34934171;
var result = waitForIt(input);
console.log(result, result === expected);

console.timeEnd('day-6');
