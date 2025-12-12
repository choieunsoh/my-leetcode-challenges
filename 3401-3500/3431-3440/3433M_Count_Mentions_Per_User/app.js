// 3433. Count Mentions Per User
// https://leetcode.com/problems/count-mentions-per-user/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
  const mentions = new Array(numberOfUsers).fill(0);
  const nextOnline = new Array(numberOfUsers).fill(0);
  events.sort((a, b) => {
    const timeA = Number(a[1]);
    const timeB = Number(b[1]);
    if (timeA !== timeB) return timeA - timeB;

    const messageA = a[0] === 'MESSAGE' ? 0 : 1;
    const messageB = b[0] === 'MESSAGE' ? 0 : 1;
    return messageB - messageA;
  });

  for (const [type, time, message] of events) {
    const timestamp = Number(time);
    if (type === 'OFFLINE') {
      const id = Number(message);
      nextOnline[id] = timestamp + 60;
    } else {
      if (message === 'ALL') {
        for (let id = 0; id < numberOfUsers; id++) {
          mentions[id]++;
        }
      } else if (message === 'HERE') {
        for (let id = 0; id < numberOfUsers; id++) {
          if (nextOnline[id] <= timestamp) {
            mentions[id]++;
          }
        }
      } else {
        const userIds = message.split(' ');
        for (const userId of userIds) {
          const id = Number(userId.substring(2));
          mentions[id]++;
        }
      }
    }
  }
  return mentions;
};

var numberOfUsers = 2,
  events = [
    ['MESSAGE', '10', 'id1 id0'],
    ['OFFLINE', '11', '0'],
    ['MESSAGE', '71', 'HERE'],
  ];
var expected = [2, 2];
var result = countMentions(numberOfUsers, events);
console.log(result, result.join() === expected.join());

var numberOfUsers = 2,
  events = [
    ['MESSAGE', '10', 'id1 id0'],
    ['OFFLINE', '11', '0'],
    ['MESSAGE', '12', 'ALL'],
  ];
var expected = [2, 2];
var result = countMentions(numberOfUsers, events);
console.log(result, result.join() === expected.join());

var numberOfUsers = 2,
  events = [
    ['OFFLINE', '10', '0'],
    ['MESSAGE', '12', 'HERE'],
  ];
var expected = [0, 1];
var result = countMentions(numberOfUsers, events);
console.log(result, result.join() === expected.join());
