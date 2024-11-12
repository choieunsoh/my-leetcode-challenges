// 1236. Web Crawler
// https://leetcode.com/problems/web-crawler/description/
// T.C.: O(m*n)
// S.C.: O(m*n)
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */
function HtmlParser() {
  this.getUrls = function (url) {
    return [];
  };
}

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
 */
var crawl = function (startUrl, htmlParser) {
  const hostName = getHostName(startUrl);
  const visited = new Set();
  dfs(startUrl);
  return [...visited];

  function getHostName(url) {
    return url.split('/')[2];
  }

  function dfs(url) {
    if (visited.has(url)) return;
    visited.add(url);
    const urls = htmlParser.getUrls(url);
    for (const url of urls) {
      if (getHostName(url) === hostName) {
        dfs(url);
      }
    }
  }
};

var urls = [
    'http://news.yahoo.com',
    'http://news.yahoo.com/news',
    'http://news.yahoo.com/news/topics/',
    'http://news.google.com',
    'http://news.yahoo.com/us',
  ],
  edges = [
    [2, 0],
    [2, 1],
    [3, 2],
    [3, 1],
    [0, 4],
  ],
  startUrl = 'http://news.yahoo.com/news/topics/';
var expected = [
  'http://news.yahoo.com',
  'http://news.yahoo.com/news',
  'http://news.yahoo.com/news/topics/',
  'http://news.yahoo.com/us',
];
var result = crawl(startUrl, new HtmlParser());
console.log(result, result.sort().join() === expected.sort().join());

var urls = [
    'http://news.yahoo.com',
    'http://news.yahoo.com/news',
    'http://news.yahoo.com/news/topics/',
    'http://news.google.com',
  ],
  edges = [
    [0, 2],
    [2, 1],
    [3, 2],
    [3, 1],
    [3, 0],
  ],
  startUrl = 'http://news.google.com';
var expected = ['http://news.google.com'];
var result = crawl(startUrl, new HtmlParser());
console.log(result, result.sort().join() === expected.sort().join());
