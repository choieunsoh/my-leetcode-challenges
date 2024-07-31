// 1105. Filling Bookcase Shelves
// https://leetcode.com/problems/filling-bookcase-shelves/description/
// T.C.: O(n * w)
// S.C.: O(n)
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length;
  // dp[i] = minimum height of bookcase containing all books up to and
  // excluding book i
  const dp = new Array(n + 1).fill(0);

  // base cases
  dp[0] = 0;
  dp[1] = books[0][1];

  for (let i = 2; i <= books.length; i++) {
    // new shelf built to hold current book
    let remainingShelfWidth = shelfWidth - books[i - 1][0];
    let maxHeight = books[i - 1][1];
    dp[i] = books[i - 1][1] + dp[i - 1];

    let j = i - 1;
    // calculate the height when previous books are added onto a new shelf
    while (j > 0 && remainingShelfWidth - books[j - 1][0] >= 0) {
      maxHeight = Math.max(maxHeight, books[j - 1][1]);
      remainingShelfWidth -= books[j - 1][0];
      dp[i] = Math.min(dp[i], maxHeight + dp[j - 1]);
      j--;
    }
  }

  return dp[n];
};

var books = [
    [1, 1],
    [2, 3],
    [2, 3],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 2],
  ],
  shelfWidth = 4;
var expected = 6;
var result = minHeightShelves(books, shelfWidth);
console.log(result, result === expected);

var books = [
    [1, 3],
    [2, 4],
    [3, 2],
  ],
  shelfWidth = 6;
var expected = 4;
var result = minHeightShelves(books, shelfWidth);
console.log(result, result === expected);
