// 815. Bus Routes
// https://leetcode.com/problems/bus-routes/
/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  const result = new Map();
  const busStops = new Map();
  for (let bus = 0; bus < routes.length; bus++) {
    const stops = routes[bus];
    for (let i = 0; i < stops.length; i++) {
      const stop = stops[i];
      const buses = busStops.get(stop) ?? new Set();
      buses.add(bus);
      busStops.set(stop, buses);
    }
  }

  result.set(source, 0);
  let queue = [source];
  while (queue.length) {
    const qq = [];
    for (let i = 0; i < queue.length; i++) {
      const busStop = queue[i];
      const buses = busStops.get(busStop) ?? new Set();
      busStops.set(busStop, new Set());
      const count = result.get(busStop);

      for (const bus of buses) {
        const route = routes[bus];
        for (const stop of route) {
          if (stop !== busStop) {
            busStops.get(stop).delete(bus);
            result.set(stop, Math.min(result.get(stop) ?? Number.MAX_SAFE_INTEGER, count + 1));
            qq.push(stop);
          }
        }
      }
    }
    queue = qq;
  }

  return result.get(target) ?? -1;
};

var routes = [
    [1, 2, 7],
    [3, 6, 7],
  ],
  source = 1,
  target = 6;
var expected = 2;
var result = numBusesToDestination(routes, source, target);
console.log(result, result === expected);

var routes = [[7, 12], [4, 5, 15], [6], [15, 19], [9, 12, 13]],
  source = 15,
  target = 12;
var expected = -1;
var result = numBusesToDestination(routes, source, target);
console.log(result, result === expected);
