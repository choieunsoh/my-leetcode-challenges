// 355. Design Twitter
// https://leetcode.com/problems/design-twitter/
// T.C.: O(n)
// S.C.: O(n)

var Twitter = function () {
  this.users = new Map();
  this.tweets = [];
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.users.has(userId)) {
    this.users.set(userId, new Set());
  }
  this.users.get(userId).add(userId);
  this.tweets.push({ userId, tweetId });
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  if (!this.users.has(userId)) return [];
  const result = [];
  const userSet = this.users.get(userId);
  for (let i = this.tweets.length - 1; i >= 0 && result.length < 10; i--) {
    const { userId, tweetId } = this.tweets[i];
    if (userSet.has(userId)) result.push(tweetId);
  }
  return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  const userSet = this.users.get(followerId) ?? new Set();
  userSet.add(followeeId);
  this.users.set(followerId, userSet);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.users.has(followerId)) return;
  this.users.get(followerId).delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
var ops = ['Twitter', 'postTweet', 'getNewsFeed', 'follow', 'postTweet', 'getNewsFeed', 'unfollow', 'getNewsFeed'],
  inputs = [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]],
  outputs = [null, null, [5], null, null, [6, 5], null, [5]];
testTwitter(ops, inputs, outputs);

function testTwitter(ops, inputs, outputs) {
  var obj = new Twitter();
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const args = inputs[i];
    const expected = outputs[i];
    let result = null;
    switch (op) {
      case 'postTweet':
        obj.postTweet(...args);
        break;
      case 'getNewsFeed':
        result = obj.getNewsFeed(...args);
        break;
      case 'follow':
        obj.follow(...args);
        break;
      case 'unfollow':
        obj.unfollow(...args);
        break;
    }
    console.log(i, op, args, expected, result, JSON.stringify(result) === JSON.stringify(expected));
  }
}
