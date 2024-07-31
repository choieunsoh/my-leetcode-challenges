// 1105. Filling Bookcase Shelves
// https://leetcode.com/problems/filling-bookcase-shelves/description/
// T.C.: O(n * w)
// S.C.: O(n * w)
/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length;
  const memo = Array.from({ length: n }, () => new Array(shelfWidth + 1).fill(0));
  return dp(0, shelfWidth, 0);

  function dp(bookIndex, remainingShelfWidth, maxHeight) {
    const [bookWidth, bookHeight] = books[bookIndex];
    const currentMaxHeight = Math.max(maxHeight, bookHeight);
    if (bookIndex === n - 1) {
      if (remainingShelfWidth >= bookWidth) {
        return currentMaxHeight;
      }
      return maxHeight + bookHeight;
    }

    if (memo[bookIndex][remainingShelfWidth] !== 0) {
      return memo[bookIndex][remainingShelfWidth];
    }

    // Next Shelf
    let optimalHeight = maxHeight + dp(bookIndex + 1, shelfWidth - bookWidth, bookHeight);

    // Current Shelf
    if (remainingShelfWidth >= bookWidth) {
      const currentShelfHeight = dp(bookIndex + 1, remainingShelfWidth - bookWidth, currentMaxHeight);
      optimalHeight = Math.min(optimalHeight, currentShelfHeight);
    }

    memo[bookIndex][remainingShelfWidth] = optimalHeight;
    return optimalHeight;
  }
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
