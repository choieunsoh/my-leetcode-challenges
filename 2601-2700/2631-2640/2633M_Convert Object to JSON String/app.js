// 2633. Convert Object to JSON String
// https://leetcode.com/problems/convert-object-to-json-string/
/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
  if (object === null) {
    return 'null';
  }
  if (object === undefined) {
    return 'undefined';
  }
  if (typeof object === 'string') {
    return `"${object}"`;
  }
  if (typeof object !== 'object') {
    return object.toString();
  }
  if (object instanceof Date) {
    return object.toISOString();
  }
  if (Array.isArray(object)) {
    const arr = [];
    for (const item of object) {
      arr.push(jsonStringify(item));
    }
    return `[${arr.join(',')}]`;
  }

  const keys = Object.keys(object);
  const arr = [];
  for (const key of keys) {
    const value = jsonStringify(object[key]);
    arr.push(`"${key}":${value}`);
  }
  return `{${arr.join(',')}}`;
};

var object = { y: 1, x: 2 };
var expected = '{"y":1,"x":2}';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = { a: 'str', b: -12, c: true, d: null };
var expected = '{"a":"str","b":-12,"c":true,"d":null}';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = { key: { a: 1, b: [{}, null, 'Hello'] } };
var expected = '{"key":{"a":1,"b":[{},null,"Hello"]}}';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = true;
var expected = 'true';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = null;
var expected = 'null';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = undefined;
var expected = 'undefined';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = new Date(2023, 4, 22);
var expected = '2023-05-21T17:00:00.000Z';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = 1234;
var expected = '1234';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = 'string';
var expected = '"string"';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = '"string"';
var expected = '"\\"string\\""';
var result = jsonStringify(object);
console.log(result, expected, result === expected);

var object = ['string', 1234, true, { x: 5 }];
var expected = '["string",1234,true,{"x":5}]';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = [];
var expected = '[]';
var result = jsonStringify(object);
console.log(result, result === expected);

var object = {};
var expected = '{}';
var result = jsonStringify(object);
console.log(result, result === expected);
