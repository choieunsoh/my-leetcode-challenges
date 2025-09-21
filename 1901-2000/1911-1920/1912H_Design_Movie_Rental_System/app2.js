// 1912. Design Movie Rental System
// https://leetcode.com/problems/design-movie-rental-system/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function (_n, entries) {
  this.maxNumSearchResults = 5;

  const sorted = [...entries].sort(([shop1, _1, price1], [shop2, _2, price2]) => {
    const priceDiff = price1 - price2;
    return priceDiff ? priceDiff : shop1 - shop2;
  });

  // { movie: [ [shop1, priceLowest] ... [shopN, priceHighest] ] }
  this.movies = sorted.reduce((movies, [shop, movie]) => {
    let shops = movies[movie];
    if (shops === undefined) shops = movies[movie] = [];
    shops.push(shop);
    return movies;
  }, {});

  // { shop: { movie: { price } } }
  this.shops = sorted.reduce((shops, [shop, movie, price]) => {
    let data = shops[shop];
    if (data === undefined) data = shops[shop] = {};
    data[movie] = { price };
    return shops;
  }, {});

  // i = [shop, movie]
  this.rented = [];
};

/**
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function (movie) {
  const results = [];
  const shops = this.movies[movie];
  if (!shops) return results;

  for (let i = 0, l = shops.length; results.length < this.maxNumSearchResults && i < l; i++) {
    const shop = shops[i];
    if (!this.shops[shop][movie].rented) results.push(shop);
  }
  return results;
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function (shop, movie) {
  if (this.shops[shop][movie].rented === undefined) {
    const rentData = [shop, movie];

    this.shops[shop][movie].rented = rentData;
    this.rented.push(rentData);
  }
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function (shop, movie) {
  const movieData = this.shops[shop]?.[movie].rented;

  if (movieData) {
    this.rented.splice(this.rented.indexOf(movieData), 1);
    delete this.shops[shop][movie].rented;
  }
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function () {
  return this.rented
    .sort(([shop1, movie1], [shop2, movie2]) => {
      const priceDiff = this.shops[shop1][movie1].price - this.shops[shop2][movie2].price;

      if (!priceDiff) return shop1 === shop2 ? movie1 - movie2 : shop1 - shop2;

      return priceDiff;
    })
    .slice(0, this.maxNumSearchResults);
};

/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * var obj = new MovieRentingSystem(n, entries)
 * var param_1 = obj.search(movie)
 * obj.rent(shop,movie)
 * obj.drop(shop,movie)
 * var param_4 = obj.report()
 */

function run(ops, inputs, outputs) {
  let obj = null;
  for (let i = 0; i < ops.length; i++) {
    const expected = outputs[i];
    let result = null;
    switch (ops[i]) {
      case 'MovieRentingSystem':
        obj = new MovieRentingSystem(...inputs[i]);
        break;
      default:
        result = obj[ops[i]](...inputs[i]);
        break;
    }
    console.log(i, ops[i], result, JSON.stringify(result) === JSON.stringify(expected));
  }
}

var ops = ['MovieRentingSystem', 'search', 'rent', 'rent', 'report', 'drop', 'search'],
  inputs = [
    [
      3,
      [
        [0, 1, 5],
        [0, 2, 6],
        [0, 3, 7],
        [1, 1, 4],
        [1, 2, 7],
        [2, 1, 5],
      ],
    ],
    [1],
    [0, 1],
    [1, 2],
    [],
    [1, 2],
    [2],
  ],
  outputs = [
    null,
    [1, 0, 2],
    null,
    null,
    [
      [0, 1],
      [1, 2],
    ],
    null,
    [0, 1],
  ];
//run(ops, inputs, outputs);

var ops = ['MovieRentingSystem', 'rent', 'drop', 'rent', 'rent', 'rent', 'drop', 'search', 'report', 'rent', 'search'],
  inputs = [
    [
      10,
      [
        [4, 374, 55],
        [1, 6371, 21],
        [8, 3660, 24],
        [1, 56, 32],
        [5, 374, 71],
        [3, 4408, 36],
        [6, 9322, 73],
        [6, 9574, 92],
        [8, 7834, 62],
        [2, 6084, 27],
        [7, 3262, 89],
        [2, 8959, 53],
        [0, 3323, 41],
        [6, 6565, 45],
        [0, 4239, 20],
      ],
    ],
    [0, 4239],
    [0, 4239],
    [3, 4408],
    [2, 6084],
    [0, 4239],
    [0, 4239],
    [9346],
    [],
    [6, 9322],
    [8698],
  ],
  outputs = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    [],
    [
      [2, 6084],
      [3, 4408],
    ],
    null,
    [],
  ];
//run(ops, inputs, outputs);

var ops = [
    'MovieRentingSystem',
    'rent',
    'search',
    'search',
    'report',
    'rent',
    'rent',
    'report',
    'report',
    'search',
    'search',
    'rent',
    'rent',
    'search',
    'drop',
    'drop',
    'drop',
    'drop',
    'rent',
    'report',
    'report',
    'rent',
    'drop',
    'search',
    'report',
    'drop',
    'report',
    'drop',
    'rent',
    'report',
    'search',
    'search',
    'rent',
    'rent',
    'report',
    'report',
    'drop',
    'report',
    'report',
    'drop',
    'report',
    'drop',
    'rent',
    'drop',
    'search',
    'rent',
    'search',
    'drop',
    'rent',
    'drop',
    'report',
    'rent',
    'drop',
    'rent',
    'rent',
    'drop',
    'report',
    'report',
    'report',
    'report',
    'rent',
    'drop',
    'report',
    'drop',
    'rent',
    'search',
    'drop',
    'report',
    'rent',
    'search',
    'search',
    'report',
    'rent',
    'report',
    'report',
    'rent',
    'report',
    'report',
    'search',
    'rent',
    'rent',
    'search',
  ],
  inputs = [
    [
      69,
      [
        [16, 4156, 1511],
        [20, 8501, 8417],
        [34, 7901, 7776],
        [54, 6691, 9511],
        [44, 8931, 8434],
        [42, 9640, 5251],
        [22, 4534, 9161],
        [32, 6506, 6831],
        [13, 8501, 731],
        [4, 7610, 8474],
        [33, 820, 2341],
        [17, 6490, 1161],
        [29, 7120, 2703],
        [8, 8723, 7613],
        [38, 9544, 1804],
        [30, 8723, 1047],
        [1, 5015, 7763],
        [60, 1625, 2383],
        [29, 3336, 3542],
        [39, 7535, 6066],
        [1, 9074, 9400],
        [39, 1625, 7944],
        [26, 9160, 6874],
        [55, 2465, 888],
        [35, 8530, 6025],
      ],
    ],
    [32, 6506],
    [8501],
    [6275],
    [],
    [30, 8723],
    [8, 8723],
    [],
    [],
    [6699],
    [115],
    [20, 8501],
    [16, 4156],
    [9447],
    [30, 8723],
    [8, 8723],
    [32, 6506],
    [16, 4156],
    [42, 9640],
    [],
    [],
    [17, 6490],
    [20, 8501],
    [8175],
    [],
    [17, 6490],
    [],
    [42, 9640],
    [54, 6691],
    [],
    [1625],
    [3291],
    [60, 1625],
    [39, 1625],
    [],
    [],
    [60, 1625],
    [],
    [],
    [39, 1625],
    [],
    [54, 6691],
    [8, 8723],
    [8, 8723],
    [2260],
    [29, 7120],
    [746],
    [29, 7120],
    [38, 9544],
    [38, 9544],
    [],
    [1, 9074],
    [1, 9074],
    [54, 6691],
    [39, 1625],
    [54, 6691],
    [],
    [],
    [],
    [],
    [26, 9160],
    [26, 9160],
    [],
    [39, 1625],
    [42, 9640],
    [9640],
    [42, 9640],
    [],
    [29, 7120],
    [5630],
    [1842],
    [],
    [16, 4156],
    [],
    [],
    [1, 9074],
    [],
    [],
    [7992],
    [4, 7610],
    [29, 3336],
    [1333],
  ],
  outputs = [
    null,
    null,
    [13, 20],
    [],
    [[32, 6506]],
    null,
    null,
    [
      [30, 8723],
      [32, 6506],
      [8, 8723],
    ],
    [
      [30, 8723],
      [32, 6506],
      [8, 8723],
    ],
    [],
    [],
    null,
    null,
    [],
    null,
    null,
    null,
    null,
    null,
    [
      [42, 9640],
      [20, 8501],
    ],
    [
      [42, 9640],
      [20, 8501],
    ],
    null,
    null,
    [],
    [
      [17, 6490],
      [42, 9640],
    ],
    null,
    [[42, 9640]],
    null,
    null,
    [[54, 6691]],
    [60, 39],
    [],
    null,
    null,
    [
      [60, 1625],
      [39, 1625],
      [54, 6691],
    ],
    [
      [60, 1625],
      [39, 1625],
      [54, 6691],
    ],
    null,
    [
      [39, 1625],
      [54, 6691],
    ],
    [
      [39, 1625],
      [54, 6691],
    ],
    null,
    [[54, 6691]],
    null,
    null,
    null,
    [],
    null,
    [],
    null,
    null,
    null,
    [],
    null,
    null,
    null,
    null,
    null,
    [[39, 1625]],
    [[39, 1625]],
    [[39, 1625]],
    [[39, 1625]],
    null,
    null,
    [[39, 1625]],
    null,
    null,
    [],
    null,
    [],
    null,
    [],
    [],
    [[29, 7120]],
    null,
    [
      [16, 4156],
      [29, 7120],
    ],
    [
      [16, 4156],
      [29, 7120],
    ],
    null,
    [
      [16, 4156],
      [29, 7120],
      [1, 9074],
    ],
    [
      [16, 4156],
      [29, 7120],
      [1, 9074],
    ],
    [],
    null,
    null,
    [],
  ];
//run(ops, inputs, outputs);

var ops = [
    'MovieRentingSystem',
    'rent',
    'report',
    'rent',
    'report',
    'rent',
    'report',
    'rent',
    'rent',
    'rent',
    'report',
  ],
  inputs = [
    [
      1,
      [
        [0, 1, 3],
        [0, 5, 3],
        [0, 7, 3],
        [0, 6, 3],
        [0, 2, 3],
        [0, 3, 3],
        [0, 4, 3],
        [0, 8, 3],
      ],
    ],
    [0, 1],
    [],
    [0, 4],
    [],
    [0, 3],
    [],
    [0, 2],
    [0, 6],
    [0, 7],
    [],
  ],
  outputs = [
    null,
    null,
    [[0, 1]],
    null,
    [
      [0, 1],
      [0, 4],
    ],
    null,
    [
      [0, 1],
      [0, 3],
      [0, 4],
    ],
    null,
    null,
    null,
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 6],
    ],
  ];
run(ops, inputs, outputs);
