// 301. Remove Invalid Parentheses
// https://leetcode.com/problems/remove-invalid-parentheses/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const n = s.length;
  const suffixOpen = new Int16Array(n + 1),
    suffixClose = new Int16Array(n + 1);
  for (let i = n - 1; i >= 0; --i) {
    const code = s.charCodeAt(i);
    suffixOpen[i] = suffixOpen[i + 1] + (code === 40);
    suffixClose[i] = suffixClose[i + 1] + (code === 41);
  }
  let unmatchedOpen = 0,
    removeClose = 0;
  for (let i = 0; i < n; ++i) {
    const code = s.charCodeAt(i);
    if (code === 40) ++unmatchedOpen;
    else if (code === 41) {
      if (unmatchedOpen === 0) ++removeClose;
      else --unmatchedOpen;
    }
  }
  const answer = [],
    path = [];
  function dfs(index, balance, removeOpen, removeClose) {
    if (
      removeOpen > suffixOpen[index] ||
      removeClose > suffixClose[index] ||
      balance > suffixClose[index] - removeClose
    )
      return;
    if (index === n) {
      if (balance === 0 && removeOpen === 0 && removeClose === 0) answer.push(path.join(''));
      return;
    }
    const code = s.charCodeAt(index);
    if (code !== 40 && code !== 41) {
      let end = index + 1;
      while (end < n) {
        const nextCode = s.charCodeAt(end);
        if (nextCode === 40 || nextCode === 41) break;
        ++end;
      }
      path.push(s.slice(index, end));
      dfs(end, balance, removeOpen, removeClose);
      path.pop();
      return;
    }
    let end = index + 1;
    while (end < n && s.charCodeAt(end) === code) ++end;
    const count = end - index;
    const maxRemoved = Math.min(count, code === 40 ? removeOpen : removeClose);
    for (let removed = 0; removed <= maxRemoved; ++removed) {
      const kept = count - removed;
      if (code === 41 && kept > balance) continue;
      if (kept > 0) path.push(s[index].repeat(kept));
      if (code === 40) dfs(end, balance + kept, removeOpen - removed, removeClose);
      else dfs(end, balance - kept, removeOpen, removeClose - removed);
      if (kept > 0) path.pop();
    }
  }
  dfs(0, 0, unmatchedOpen, removeClose);
  return answer;
};

var s = '()())()';
var expected = ['(())()', '()()()'];
var result = removeInvalidParentheses(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = '(a)())()';
var expected = ['(a())()', '(a)()()'];
var result = removeInvalidParentheses(s);
console.log(result, result.sort().join() === expected.sort().join());

var s = ')(';
var expected = [''];
var result = removeInvalidParentheses(s);
console.log(result, result.sort().join() === expected.sort().join());
