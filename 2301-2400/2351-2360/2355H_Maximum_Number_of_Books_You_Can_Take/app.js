// 2355. Maximum Number of Books You Can Take
// https://leetcode.com/problems/maximum-number-of-books-you-can-take/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} books
 * @return {number}
 */
var maximumBooks = function (books) {
  if (books.length === 1) {
    return books[0];
  }

  const memo = new Array(books.length).fill(null);
  memo[0] = books[0];

  const stack = [0];

  let max = memo[0];
  for (let i = 1; i < books.length; i++) {
    let j = -1;
    while (stack.length > 0 && books[stack[stack.length - 1]] >= books[i] - (i - stack[stack.length - 1])) {
      stack.pop();
    }

    if (stack.length > 0) {
      j = stack[stack.length - 1];
    }

    stack.push(i);

    const n = i - j;
    const b = books[i];

    let res;
    if (b < n) {
      res = ((b + 1) / 2) * b;
    } else {
      res = (n / 2) * (2 * b - (n - 1)) + (j < 0 ? 0 : memo[j]);
    }

    memo[i] = res;
    max = Math.max(max, res);
  }

  return max;
};

var books = [8, 5, 2, 7, 9];
var expected = 19;
var result = maximumBooks(books);
console.log(result, result === expected);

var books = [7, 0, 3, 4, 5];
var expected = 12;
var result = maximumBooks(books);
console.log(result, result === expected);

var books = [8, 2, 3, 7, 3, 4, 0, 1, 4, 3];
var expected = 13;
var result = maximumBooks(books);
console.log(result, result === expected);
