'use strict';

const logger = require('./logger');

logger.title('8. this Inside Function with Strict Mode', false);

this.name = 'Jane';

function greet() {
  console.log(this.name);
}

greet.call(this); // Jane
