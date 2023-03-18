// 1472. Design Browser History
// https://leetcode.com/problems/design-browser-history/
class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.urls = [homepage];
    this.index = 0;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.urls[++this.index] = url;
    this.urls.length = this.index + 1;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    this.index -= steps;
    if (this.index < 0) this.index = 0;
    return this.__get();
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    this.index += steps;
    if (this.index > this.urls.length - 1) this.index = this.urls.length - 1;
    return this.__get();
  }

  __get() {
    return this.urls[this.index];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
var inputs = [
  'BrowserHistory',
  'visit',
  'visit',
  'visit',
  'back',
  'back',
  'forward',
  'visit',
  'forward',
  'back',
  'back',
];
var args = [
  ['leetcode.com'],
  ['google.com'],
  ['facebook.com'],
  ['youtube.com'],
  [1],
  [1],
  [1],
  ['linkedin.com'],
  [2],
  [2],
  [7],
];
var outputs = [
  null,
  null,
  null,
  null,
  'facebook.com',
  'google.com',
  'facebook.com',
  null,
  'linkedin.com',
  'google.com',
  'leetcode.com',
];
var obj = null;
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  var arg = args[i];
  var output = outputs[i];
  switch (input) {
    case 'BrowserHistory': {
      var homepage = arg[0];
      obj = new BrowserHistory(homepage);
      console.log(i, input, homepage, obj.__get(), homepage === obj.__get());
      break;
    }
    case 'visit': {
      var url = arg[0];
      obj.visit(url);
      console.log(i, input, url, obj.__get(), url === obj.__get());
      break;
    }
    case 'back': {
      var steps = +arg[0];
      var url = obj.back(steps);
      console.log(i, input, steps, url, url === output);
      break;
    }
    case 'forward': {
      var steps = +arg[0];
      var url = obj.forward(steps);
      console.log(i, input, steps, url, url === output);
      break;
    }
  }
}
