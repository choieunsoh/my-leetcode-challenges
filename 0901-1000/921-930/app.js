// https://leetcode.com/problems/unique-email-addresses/
// 929. Unique Email Addresses
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();
  for (let i = 0; i < emails.length; i++) {
    let [local, domain] = emails[i].split('@');
    local = local.split('+')[0].split('.').join('');
    const email = `${local}@${domain}`;
    uniqueEmails.add(email);
  }
  return uniqueEmails.size;
};

var emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];
var expected = 2;
var actual = numUniqueEmails(emails);
console.log(actual, actual === expected);

var emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'];
var expected = 3;
var actual = numUniqueEmails(emails);
console.log(actual, actual === expected);

var emails = ['test.email+alex@leetcode.com', 'test.email.leet+alex@code.com'];
var expected = 2;
var actual = numUniqueEmails(emails);
console.log(actual, actual === expected);
