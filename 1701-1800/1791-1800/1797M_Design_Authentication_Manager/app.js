// 1797. Design Authentication Manager
// https://leetcode.com/problems/design-authentication-manager/
class AuthenticationManager {
  /**
   * @param {number} timeToLive
   */
  constructor(timeToLive) {
    this.timeToLive = timeToLive;
    this.tokens = new Map();
  }

  /**
   * @param {string} tokenId
   * @param {number} currentTime
   * @return {void}
   */
  generate(tokenId, currentTime) {
    const expireTime = currentTime + Number(this.timeToLive);
    this.tokens.set(tokenId, expireTime);
  }

  /**
   * @param {string} tokenId
   * @param {number} currentTime
   * @return {void}
   */
  renew(tokenId, currentTime) {
    const expireTime = this.tokens.get(tokenId) ?? -1;
    if (currentTime < expireTime) {
      const newExpireTime = currentTime + Number(this.timeToLive);
      this.tokens.set(tokenId, newExpireTime);
    } else {
      this.tokens.delete(tokenId);
    }
  }

  /**
   * @param {number} currentTime
   * @return {number}
   */
  countUnexpiredTokens(currentTime) {
    let unexpiredTokens = 0;
    for (const [, expireTime] of this.tokens) {
      if (currentTime < expireTime) unexpiredTokens++;
    }
    return unexpiredTokens;
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
// Input:
var inputs = [
  'AuthenticationManager',
  'renew',
  'generate',
  'countUnexpiredTokens',
  'generate',
  'renew',
  'renew',
  'countUnexpiredTokens',
];
var params = [[5], ['aaa', 1], ['aaa', 2, 7], [6], ['bbb', 7, 12], ['aaa', 8, undefined], ['bbb', 10, 15], [15]];
// Output:
var outputs = [null, null, null, 1, null, null, null, 0];

var timeToLive = 0;
var obj = null;
for (let i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  var param = params[i];
  var expected = outputs[i];
  switch (input) {
    case 'AuthenticationManager': {
      timeToLive = param;
      obj = new AuthenticationManager(timeToLive);
      console.log(input, param, expected, true);
      break;
    }
    case 'renew': {
      var [tokenId, currentTime, expected] = param;
      obj.renew(tokenId, currentTime);
      var result = obj.tokens.get(tokenId);
      console.log(input, param, expected, result === expected);
      break;
    }
    case 'generate': {
      var [tokenId, currentTime, expected] = param;
      obj.generate(tokenId, currentTime);
      var result = obj.tokens.get(tokenId);
      console.log(input, param, expected, result === expected);
      break;
    }
    case 'countUnexpiredTokens': {
      var currentTime = param;
      var count = obj.countUnexpiredTokens(currentTime);
      console.log(input, param, count, count === expected);
      break;
    }
  }
}
