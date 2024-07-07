// T.C.: O(n * m)
// S.C.: O(n)
/**
 * @param {string[]} usernames
 * @return {string[]}
 */
function possibleChanges(usernames) {
  const results = usernames.map((username) => {
    for (let i = 0; i < username.length - 1; i++) {
      if (username[i] > username[i + 1]) {
        return 'YES';
      }
    }
    return 'NO';
  });
  return results;
}

var usernames = ['bee', 'superhero', 'ace'];
var expected = ['NO', 'YES', 'NO'];
var result = possibleChanges(usernames);
console.log(result, result.join() === expected.join());

var usernames = ['hydra'];
var expected = ['YES'];
var result = possibleChanges(usernames);
console.log(result, result.join() === expected.join());

var usernames = ['foo', 'bar', 'baz'];
var expected = ['NO', 'YES', 'YES'];
var result = possibleChanges(usernames);
console.log(result, result.join() === expected.join());

var usernames = ['abcxyzh'];
var expected = ['YES'];
var result = possibleChanges(usernames);
console.log(result, result.join() === expected.join());
