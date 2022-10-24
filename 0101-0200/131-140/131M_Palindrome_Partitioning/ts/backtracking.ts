// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/
var partition = function (s: string): string[][] {
  const result: string[][] = [];
  backtracking();
  return result;

  function backtracking(start = 0, palindromes: string[] = []): void {
    if (start === s.length) {
      result.push([...palindromes]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      const word = s.substring(start, i + 1);
      if (!isPalindrome(word)) continue;

      palindromes.push(word);
      backtracking(i + 1, palindromes);
      palindromes.pop();
    }
  }

  function isPalindrome(
    word: string,
    left = 0,
    right = word.length - 1
  ): boolean {
    while (left < right) {
      if (word[left++] !== word[right--]) return false;
    }
    return true;
  }
};

var s = 'aab';
var expected = [
  ['a', 'a', 'b'],
  ['aa', 'b'],
];
var result = partition(s);
console.log(result, result.join() === expected.join());

var s = 'a';
var expected = [['a']];
var result = partition(s);
console.log(result, result.join() === expected.join());
