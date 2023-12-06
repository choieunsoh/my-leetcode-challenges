// https://adventofcode.com/2023/day/6

var waitForIt = function (input) {
  const data = getData(input);
  let result = 1;
  for (let i = 0; i < data.length; i++) {
    const [maxTime, record] = data[i];
    let minSpeed = 0;
    for (let speed = 1; minSpeed === 0 && speed <= (maxTime - 1) / 2; speed++) {
      const timeLeft = maxTime - speed;
      const distance = timeLeft * speed;
      if (distance > record) {
        minSpeed = speed;
        break;
      }
    }
    const maxSpeed = maxTime - minSpeed;
    const count = maxSpeed - minSpeed + 1;
    result *= count;
  }
  return result;
};

function getData(input) {
  const lines = input.split('\n');
  const [, timeStr] = lines[0].split(':');
  const times = timeStr.split(' ').flatMap((str) => (str ? [Number(str)] : []));
  const [, distStr] = lines[1].split(':');
  const distances = distStr.split(' ').flatMap((str) => (str ? [Number(str)] : []));
  return times.map((time, i) => [time, distances[i]]);
}

console.time('day-6');
var input = `Time:      7  15   30
Distance:  9  40  200`;
var expected = 288;
var result = waitForIt(input);
console.log(result, result === expected);

var input = `Time:        54     81     70     88
Distance:   446   1292   1035   1007`;
var expected = 2065338;
var result = waitForIt(input);
console.log(result, result === expected);

console.timeEnd('day-6');
