const obj = {
  dev: 'bfe',
  a: function () {
    return this.dev;
  },
  b() {
    return this.dev;
  },
  c: () => {
    return this.dev;
  },
  d: function () {
    return (() => {
      return this.dev;
    })();
  },
  e: function () {
    return this.b();
  },
  f: function () {
    return this.b;
  },
  g: function () {
    return this.c();
  },
  h: function () {
    return this.c;
  },
  i: function () {
    return () => {
      return this.dev;
    };
  },
};

console.log(obj.a());
console.log(obj.b());
console.log(obj.c());
console.log(obj.d());
console.log(obj.e());
console.log(obj.f()());
console.log(obj.g());
console.log(obj.h()());
console.log(obj.i()());

/*
"bfe"
"bfe"
undefined
"bfe"
"bfe"
undefined
undefined
undefined
"bfe"
*/

/*
const obj = {
  dev: 'bfe',
  a: function() {
    return this.dev
  },
  b() {
    return this.dev
  },
}

console.log(obj.a()) // bfe
console.log(obj.b()) // bfe

Array function & this
const obj = {
  dev: 'bfe',
  c: () => {
    ///? When we use arrow functions as object properties
    ///? it creates a new context, so console.log(this) is
    ///? everything in this arrow function, dev isn't there
    return this.dev
  },
}
console.log(obj.c()) // undefined

IIFE & array function
const obj = {
  dev: 'bfe',
  d: function() {
    ///? although this is an arrow function
    ///? it's an IIFE, so when parsed it turns into this
    ///? return this.dev
    return (() => {
      return this.dev
    })()
  },
  e: function() {
    ///? b or e don't have arrow functions
    ///? so they can still access dev in the
    ///? context of this
    return this.b()
  },
}
console.log(obj.d()) // bfe
console.log(obj.e()) // bfe

const obj = {
  dev: 'bfe',

  b() {
    return this.dev
  },

  f: function() {
    ///? When we pass a reference to the b function
    ///? we loose the this context as the callee is outside the obj
    return this.b
  },
  g: function() {
    ///? we already know c is trapped
    ///? in an arrow function context
    ///? so it's always gonna be undefined
    return this.c()
  },
  h: function() {
    ///? we already know c is trapped
    ///? in an arrow function context
    ///? so it's always gonna be undefined
    ///? even when using obj.h()()
    return this.c
  },
}


console.log(obj.f()()) // undefined
console.log(obj.g()) // undefined
console.log(obj.h()()) // undefined

Nested arrow function
const obj = {
  dev: 'bfe',
  i: function() {
    return () => {
      return this.dev // as this was created inside the function
      ///? it assumes the objects this
    }
  }
}

console.log(obj.i()()) // bfe
*/
