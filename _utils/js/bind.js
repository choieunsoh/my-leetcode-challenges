const logger = require('./logger');

logger.topic('Bind');

const fn = {
  value: 0,
  print: function () {
    console.log(this.value);
  },
};

const obj1 = Object.freeze({ value: 1 });
const obj2 = Object.freeze({ value: 2 });
const obj3 = Object.freeze({ value: 3 });

const p = fn.print;

logger.title('Normal Function');
fn.print();

logger.title('No "this" - undefined in strict mode, global/window in non-strict mode');
p();

logger.title('Basic ".bind"');
p.bind(obj1)();
p.bind(obj2)();
p.bind(obj3)();

logger.title('Permanent Bound - Chained ".bind"');
p.bind(obj2).bind(obj3)();

const p1 = p.bind(obj1);
p1.bind(obj2)();
const p2 = p1.bind(obj2);
p2.bind(obj3)();

fn.print.bind()();
fn.print.bind(obj2)();
fn.print.bind(obj2).bind(obj3)();
fn.print.bind(obj2).call(obj3);
