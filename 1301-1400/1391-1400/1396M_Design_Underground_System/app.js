// 1396. Design Underground System
// https://leetcode.com/problems/design-underground-system/
var UndergroundSystem = function () {
  this.averageTimes = new Map();
  this.travelers = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  if (this.travelers.has(id)) return;
  this.travelers.set(id, { stationName, t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  if (!this.travelers.has(id)) return;
  const checkIn = this.travelers.get(id);
  this.travelers.delete(id);

  const currentTime = t - checkIn.t;
  const key = `${checkIn.stationName}:${stationName}`;
  const [totalTime, travelers] = this.averageTimes.get(key) ?? [0, 0];
  this.averageTimes.set(key, [totalTime + currentTime, travelers + 1]);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const key = `${startStation}:${endStation}`;
  if (!this.averageTimes.has(key)) return 0;

  const [totalTime, travelers] = this.averageTimes.get(key);
  return totalTime / travelers;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
var inputs = [
  'UndergroundSystem',
  'checkIn',
  'checkIn',
  'checkIn',
  'checkOut',
  'checkOut',
  'checkOut',
  'getAverageTime',
  'getAverageTime',
  'checkIn',
  'getAverageTime',
  'checkOut',
  'getAverageTime',
];
var params = [
  [],
  [45, 'Leyton', 3],
  [32, 'Paradise', 8],
  [27, 'Leyton', 10],
  [45, 'Waterloo', 15],
  [27, 'Waterloo', 20],
  [32, 'Cambridge', 22],
  ['Paradise', 'Cambridge'],
  ['Leyton', 'Waterloo'],
  [10, 'Leyton', 24],
  ['Leyton', 'Waterloo'],
  [10, 'Waterloo', 38],
  ['Leyton', 'Waterloo'],
];
var outputs = [null, null, null, null, null, null, null, 14.0, 11.0, null, 11.0, null, 12.0];
var obj = new UndergroundSystem();
for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];
  const param = params[i];
  const expected = outputs[i];
  switch (input) {
    case 'UndergroundSystem': {
      obj = new UndergroundSystem();
      break;
    }
    case 'checkIn': {
      obj.checkIn(...param);
      console.log(input, obj);
      break;
    }
    case 'checkOut': {
      //const [id, stationName, t] = param;
      obj.checkOut(...param);
      console.log(input, obj);
      break;
    }
    case 'getAverageTime': {
      const result = obj.getAverageTime(...param);
      console.log(input, result, result === expected);
      break;
    }
  }
}
