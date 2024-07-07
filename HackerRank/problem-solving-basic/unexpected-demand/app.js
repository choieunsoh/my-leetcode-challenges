// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} orders
 * @param {number} widgets
 * @return {number[]}
 */
function filledOrders(orders, widgets) {
  let customers = 0;
  orders.sort((a, b) => a - b);
  for (const order of orders) {
    if (widgets < order) break;

    customers++;
    widgets -= order;
  }
  return customers;
}

var orders = [10, 30],
  k = 40;
var expected = 2;
var result = filledOrders(orders, k);
console.log(result, result === expected);

var orders = [5, 4, 6],
  k = 3;
var expected = 0;
var result = filledOrders(orders, k);
console.log(result, result === expected);
