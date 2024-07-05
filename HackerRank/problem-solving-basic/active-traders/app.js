// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {string[]} customers
 * @return {string[]}
 */
function mostActive(customers) {
  const transactionCount = new Map();
  const n = customers.length;
  const threshold = (n * 0.05) | 0;
  for (const customer of customers) {
    transactionCount.set(customer, (transactionCount.get(customer) ?? 0) + 1);
  }

  const topTraders = [];
  for (const [customer, count] of transactionCount) {
    if (count >= threshold) {
      topTraders.push(customer);
    }
  }
  return topTraders.sort();
}

var customers = [
  'B',
  'B',
  'A',
  'B',
  'Z',
  'Z',
  'Abc',
  'B',
  'A',
  'B',
  'B',
  'Z',
  'B',
  'Z',
  'Z',
  'B',
  'A',
  'B',
  'A',
  'B',
  'A',
  'L',
  'N',
];
var expected = ['A', 'B', 'Z'];
var result = mostActive(customers);
console.log(result, result.join() === expected.join());

var customers = ['A', 'O', 'A', 'O', 'A', 'O', 'A', 'O', 'A', 'O', 'A', 'O', 'A', 'O', 'A', 'O', 'A', 'O', 'A', 'B'];
var expected = ['A', 'B', 'O'];
var result = mostActive(customers);
console.log(result, result.join() === expected.join());

var customers = [
  'A',
  'B',
  'Z',
  'B',
  'Z',
  'Z',
  'E',
  'B',
  'Z',
  'B',
  'Z',
  'B',
  'D',
  'Z',
  'B',
  'Z',
  'B',
  'Z',
  'B',
  'Z',
  'B',
];
var expected = ['B', 'Z'];
var result = mostActive(customers);
console.log(result, result.join() === expected.join());
