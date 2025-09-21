// 1912. Design Movie Rental System
// https://leetcode.com/problems/design-movie-rental-system/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * A renting system that supports searching for, booking, and returning movies.
 * The system should also support generating a report of the currently rented movies.
 * @param {number} n a movie renting company consisting of n shops.
 * @param {number[][]} entries each movie is given as a 2D integer array entries
 * where entries[i] = [shop_i, movie_i, price_i] indicates that there is a copy of movie movie_i
 * at shop shop_i with a rental price of price_i.
 * Each shop carries at most one copy of a movie movie_i.
 */
var MovieRentingSystem = function (n, entries) {
  this.comparer = (a, b) => a.price - b.price || a.shop - b.shop || a.movie - b.movie;
  const shops = Array.from({ length: n }, () => new Map());
  const unrentedMovies = new Map();

  for (const [shop, movie, price] of entries) {
    shops[shop].set(movie, price);
    if (!unrentedMovies.has(movie)) {
      unrentedMovies.set(movie, []);
    }
    unrentedMovies.get(movie).push({ shop, movie, price });
  }

  for (const movies of unrentedMovies.values()) {
    movies.sort(this.comparer);
  }

  this.shops = shops;
  this.unrentedMovies = unrentedMovies;
  this.cheapestRentedMovies = new Map();
  this.rentedMovies = new Set();
};

/**
 * Finds the cheapest 5 shops that have an unrented copy of a given movie.
 * The shops should be sorted by price in ascending order, and in case of a tie,
 * the one with the smaller shop_i should appear first. If there are less than 5 matching shops,
 * then all of them should be returned. If no shop has an unrented copy,
 * then an empty list should be returned.
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function (movie) {
  if (!this.unrentedMovies.has(movie)) {
    return [];
  }
  const rentedMovies = this.rentedMovies;
  const cheapestMovies = this.unrentedMovies.get(movie);
  const result = [];
  for (let i = 0; i < cheapestMovies.length && result.length < 5; i++) {
    const { shop } = cheapestMovies[i];
    const key = `${shop},${movie}`;
    if (!rentedMovies.has(key)) {
      result.push(shop);
    }
  }
  return result;
};

/**
 * Rents an unrented copy of a given movie from a given shop.
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function (shop, movie) {
  const key = `${shop},${movie}`;
  this.rentedMovies.add(key);
  const price = this.shops[shop].get(movie);
  this.cheapestRentedMovies.set(key, price);
  return null;
};

/**
 * Drops off a previously rented copy of a given movie at a given shop.
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function (shop, movie) {
  const key = `${shop},${movie}`;
  if (this.rentedMovies.has(key)) {
    this.rentedMovies.delete(key);
    this.cheapestRentedMovies.delete(key);
  }
  return null;
};

/**
 * Returns the cheapest 5 rented movies (possibly of the same movie ID)
 * as a 2D list res where res[j] = [shop_j, movie_j] describes that
 * the jth cheapest rented movie movie_j was rented from the shop shop_j.
 * The movies in res should be sorted by price in ascending order,
 * and in case of a tie, the one with the smaller shop_j should appear first,
 * and if there is still tie, the one with the smaller movie_j should appear first.
 * If there are fewer than 5 rented movies, then all of them should be returned.
 * If no movies are currently being rented, then an empty list should be returned.
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function () {
  const rentedList = Array.from(this.cheapestRentedMovies.entries()).map(([key, price]) => {
    const [shop, movie] = key.split(',').map(Number);
    return { shop, movie, price };
  });
  rentedList.sort(this.comparer);
  return rentedList.slice(0, 5).map((item) => [item.shop, item.movie]);
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
