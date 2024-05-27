'use strict';

const logger = require('./logger');

logger.title('8. this Inside Function with Strict Mode', false);

this.name = 'Jack';
function greet() {
  // this refers to undefined
  console.log(this);
}
greet(); // undefined
