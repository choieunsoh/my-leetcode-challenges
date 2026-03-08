// 635. Design Log Storage System
// https://leetcode.com/problems/design-log-storage-system/description/
// T.C.: O(n)
// S.C.: O(n)

var LogSystem = function () {
  this.log = [];

  const granularity = ['Year', 'Month', 'Day', 'Hour', 'Minute', 'Second'];
  this.granularityMap = new Map(granularity.map((g, i) => [g, i]));
};

/**
 * @param {number} id
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function (id, timestamp) {
  const token = timestamp.split(':').map(Number);
  this.log.push([id, this._convert(token)]);
};

/**
 * @param {string} start
 * @param {string} end
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function (start, end, granularity) {
  const lower = this._fromGranularity(start, granularity, false);
  const upper = this._fromGranularity(end, granularity, true);
  const result = [];
  for (const [id, timestamp] of this.log) {
    if (timestamp >= lower && timestamp < upper) {
      result.push(id);
    }
  }
  return result;
};

LogSystem.prototype._convert = function (token) {
  const year = token[0];
  const month = token[1] === 0 ? 0 : token[1] - 1;
  const day = token[2] === 0 ? 0 : token[2] - 1;
  const hour = token[3];
  const minute = token[4];
  const second = token[5];
  return (
    (year - 1999) * 12 * 31 * 24 * 60 * 60 +
    month * 31 * 24 * 60 * 60 +
    day * 24 * 60 * 60 +
    hour * 60 * 60 +
    minute * 60 +
    second
  );
};

LogSystem.prototype._fromGranularity = function (timestamp, granularity, isEnd) {
  const token = timestamp.split(':').map(Number);
  const limit = this.granularityMap.get(granularity);
  if (isEnd) {
    token[limit]++;
  }
  for (let i = limit + 1; i < token.length; i++) {
    token[i] = 0;
  }
  return this._convert(token);
};

/**
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */

function run(ops, inputs, outputs) {
  const logSystem = new LogSystem();
  for (let i = 1; i < ops.length; i++) {
    const op = ops[i];
    const input = inputs[i];
    const expected = outputs[i]?.sort((a, b) => a - b);
    const result = logSystem[op](...input)?.sort((a, b) => a - b) ?? null;
    console.log(i, op, result, result?.join() === expected?.join());
  }
}

var ops = ['LogSystem', 'put', 'put', 'put', 'retrieve', 'retrieve'];
var inputs = [
    [],
    [1, '2017:01:01:23:59:59'],
    [2, '2017:01:01:22:59:59'],
    [3, '2016:01:01:00:00:00'],
    ['2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Year'],
    ['2016:01:01:01:01:01', '2017:01:01:23:00:00', 'Hour'],
  ],
  outputs = [null, null, null, null, [3, 2, 1], [2, 1]];
run(ops, inputs, outputs);
