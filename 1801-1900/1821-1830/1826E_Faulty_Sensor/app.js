// 1826. Faulty Sensor
// https://leetcode.com/problems/faulty-sensor/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} sensor1
 * @param {number[]} sensor2
 * @return {number}
 */
var badSensor = function (sensor1, sensor2) {
  const n = sensor1.length;
  let index = 0;
  while (index < n && sensor1[index] === sensor2[index]) {
    index++;
  }
  while (index + 1 < n && sensor1[index] === sensor2[index + 1] && sensor1[index + 1] === sensor2[index]) {
    index++;
  }
  if (index >= n - 1) return -1;
  return sensor1[index] === sensor2[index + 1] ? 1 : 2;
};

var sensor1 = [2, 3, 4, 5],
  sensor2 = [2, 1, 3, 4];
var expected = 1;
var result = badSensor(sensor1, sensor2);
console.log(result, result === expected);

var sensor1 = [2, 2, 2, 2, 2],
  sensor2 = [2, 2, 2, 2, 5];
var expected = -1;
var result = badSensor(sensor1, sensor2);
console.log(result, result === expected);

var sensor1 = [2, 3, 2, 2, 3, 2],
  sensor2 = [2, 3, 2, 3, 2, 7];
var expected = 2;
var result = badSensor(sensor1, sensor2);
console.log(result, result === expected);
