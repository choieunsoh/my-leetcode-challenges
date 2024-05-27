const logger = require('./logger');

logger.title('JavaScript this', false);

logger.title('1. this Inside Global Scope');
let a = this;
console.log(a); // Window {}

this.name = 'Sarah';
//console.log(window.name); // Sarah
delete this.name;

logger.title('2. this Inside Function');
function greet() {
  // this inside function
  // this refers to the global object
  console.log(this);
}

greet(); // Window {}

logger.title('3. this Inside Constructor Function');
function Person() {
  this.name = 'Jack';
  console.log(this);
}

let person1 = new Person();
console.log(person1.name);

logger.title('4. this Inside Object Method');
const person = {
  name: 'Jack',
  age: 25,

  // this inside method
  // this refers to the object itself
  greet() {
    console.log(this);
    console.log(this.name);
  },
};

person.greet();

logger.title('5. this Inside Inner Function');
const person2 = {
  name: 'Jack',
  age: 25,

  // this inside method
  // this refers to the object itself
  greet() {
    console.log(this); // {name: "Jack", age ...}
    console.log(this.age); // 25

    // inner function
    function innerFunc() {
      // this refers to the global object
      console.log(this); // Window { ... }
      console.log(this.age); // undefined
    }

    innerFunc();
  },
};

person2.greet();

logger.title('6. this Inside Arrow Function');
const greet1 = () => {
  console.log(this);
};
greet1(); // Window {...}

const greet2 = {
  name: 'Jack',

  // method
  sayHi() {
    let hi = () => console.log(this.name);
    hi();
  },
};

greet2.sayHi(); // Jack

const person3 = {
  name: 'Jack',
  age: 25,

  // this inside method
  // this refers to the object itself
  greet() {
    console.log(this);
    console.log(this.age);

    // inner function
    let innerFunc = () => {
      // this refers to the global object
      console.log(this);
      console.log(this.age);
    };

    innerFunc();
  },
};

person3.greet();

logger.title('7. this Inside IIFE');
(function () {
  this.name = 'Jack';
  console.log(this);
})();
