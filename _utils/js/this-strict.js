'use strict';

const logger = (function () {
  return {
    title: function (message, newline = true) {
      let format = '\x1b[36m%s\x1b[0m';
      if (newline) format = '\n' + format;
      console.log(format, message);
    },
  };
})();

logger.title('8. this Inside Function with Strict Mode');

this.name = 'Jack';
function greet() {
  // this refers to undefined
  console.log(this);
}
greet(); // undefined
