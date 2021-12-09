// // old_javascript

// comparing to see if this is the same as the global object

function foo() {
  console.log(this === global); // true
}
foo();

// this when object is assigned to a variable

let obj1 = {
  foo1: function () {
    console.log(this === obj1); // false
  },
};

another_var = obj1.foo1;
another_var();

// this is the object that is calling the function

let obj = {
  foo2: function () {
    console.log(this === obj); // true
  },
};

obj.foo2();

// // es6

let obj3 = {
  foo3: () => console.log(this === obj3), // false
};

obj3.foo3();
