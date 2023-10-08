// 721. Accounts Merge
// https://leetcode.com/problems/accounts-merge/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const visited = new Set();
  const graph = new Map();
  for (const account of accounts) {
    const [, firstEmail, ...emails] = account;
    for (const email of emails) {
      if (!graph.has(firstEmail)) {
        graph.set(firstEmail, []);
      }
      graph.get(firstEmail).push(email);

      if (!graph.has(email)) {
        graph.set(email, []);
      }
      graph.get(email).push(firstEmail);
    }
  }

  const result = [];
  for (const account of accounts) {
    const [accountName, firstEmail] = account;
    if (!visited.has(firstEmail)) {
      const mergedAccount = [accountName];
      dfs(mergedAccount, firstEmail);
      const sortedAccount = mergedAccount.slice(1).sort();
      result.push([accountName, ...sortedAccount]);
    }
  }

  return result;

  function dfs(mergedAccount, email) {
    visited.add(email);
    mergedAccount.push(email);
    if (!graph.has(email)) return;

    for (const nextEmail of graph.get(email)) {
      if (visited.has(nextEmail)) continue;
      dfs(mergedAccount, nextEmail);
    }
  }
};

var accounts = [
  ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
  ['John', 'johnsmith@mail.com', 'john00@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com'],
];
var expected = [
  ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],
  ['Mary', 'mary@mail.com'],
  ['John', 'johnnybravo@mail.com'],
];
var result = accountsMerge(accounts);
console.log(result, result.sort().join() === expected.sort().join());

var accounts = [
  ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
  ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
  ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
  ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
  ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
];
var expected = [
  ['Ethan', 'Ethan0@m.co', 'Ethan4@m.co', 'Ethan5@m.co'],
  ['Gabe', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe3@m.co'],
  ['Hanzo', 'Hanzo0@m.co', 'Hanzo1@m.co', 'Hanzo3@m.co'],
  ['Kevin', 'Kevin0@m.co', 'Kevin3@m.co', 'Kevin5@m.co'],
  ['Fern', 'Fern0@m.co', 'Fern1@m.co', 'Fern5@m.co'],
];
var result = accountsMerge(accounts);
console.log(result, result.sort().join() === expected.sort().join());

var accounts = [
  ['David', 'Avid0@m.co', 'David0@m.co', 'David1@m.co'],
  ['David', 'Gvid3@m.co', 'David3@m.co', 'David4@m.co'],
  ['David', 'David4@m.co', 'David5@m.co'],
  ['David', 'David2@m.co', 'David3@m.co'],
  ['David', 'David1@m.co', 'David2@m.co'],
];
var expected = [
  [
    'David',
    'Avid0@m.co',
    'David0@m.co',
    'David1@m.co',
    'David2@m.co',
    'David3@m.co',
    'David4@m.co',
    'David5@m.co',
    'Gvid3@m.co',
  ],
];
var result = accountsMerge(accounts);
console.log(result, result.sort().join() === expected.sort().join());
