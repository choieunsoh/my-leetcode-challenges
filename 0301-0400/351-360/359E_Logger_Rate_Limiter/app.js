// 359. Logger Rate Limiter
// https://leetcode.com/problems/logger-rate-limiter/
// T.C.: O(1)
// S.C.: O(n)
var Logger = function () {
  this.log = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  const log = this.log;
  if (!log.has(message)) {
    log.set(message, timestamp);
    return true;
  }

  const previousTimestamp = log.get(message);
  if (timestamp - previousTimestamp >= 10) {
    log.set(message, timestamp);
    return true;
  }

  return false;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

var operators = [
  'Logger',
  'shouldPrintMessage',
  'shouldPrintMessage',
  'shouldPrintMessage',
  'shouldPrintMessage',
  'shouldPrintMessage',
  'shouldPrintMessage',
];
var args = [[], [1, 'foo'], [2, 'bar'], [3, 'foo'], [8, 'bar'], [10, 'foo'], [11, 'foo']];
var outputs = [true, true, true, false, false, false, true];
var logger = null;
for (let i = 0; i < operators.length; i++) {
  if (operators[i] === 'Logger') {
    logger = new Logger();
  } else {
    const result = logger.shouldPrintMessage(...args[i]);
    console.log(result, result === outputs[i]);
  }
}
