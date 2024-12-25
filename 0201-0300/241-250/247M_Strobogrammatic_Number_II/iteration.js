// 247. Strobogrammatic Number II
// https://leetcode.com/problems/strobogrammatic-number-ii/description/
// T.C.: O(n * 5^(n/2+1))
// S.C.: O(n * 5^(n/2))
/**
 * @param {number} n
 * @return {string[]}
 */
var findStrobogrammatic = function (n) {
  const reversiblePairs = [
    ['0', '0'],
    ['1', '1'],
    ['6', '9'],
    ['8', '8'],
    ['9', '6'],
  ];

  let currStringsLength = 0;
  let queue = [];

  // When n is even, it means when decreasing by 2 we will go till 0.
  if (n % 2 === 0) {
    // We will start with 0-digit strobogrammatic numbers.
    currStringsLength = 0;
    queue = [''];
  } else {
    // We will start with 1-digit strobogrammatic numbers.
    currStringsLength = 1;
    queue = ['0', '1', '8'];
  }

  while (currStringsLength < n) {
    currStringsLength += 2;
    const nextLevel = [];

    queue.forEach((number) => {
      reversiblePairs.forEach((pair) => {
        if (currStringsLength !== n || pair[0] !== '0') {
          nextLevel.push(pair[0] + number + pair[1]);
        }
      });
    });

    queue = nextLevel;
  }

  return queue;
};

var n = 2;
var expected = ['11', '69', '88', '96'];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());

var n = 1;
var expected = ['0', '1', '8'];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());

var n = 3;
var expected = ['101', '111', '181', '609', '619', '689', '808', '818', '888', '906', '916', '986'];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());

var n = 4;
var expected = [
  '1001',
  '1111',
  '1691',
  '1881',
  '1961',
  '6009',
  '6119',
  '6699',
  '6889',
  '6969',
  '8008',
  '8118',
  '8698',
  '8888',
  '8968',
  '9006',
  '9116',
  '9696',
  '9886',
  '9966',
];
var result = findStrobogrammatic(n);
console.log(result, result.sort().join() === expected.sort().join());
