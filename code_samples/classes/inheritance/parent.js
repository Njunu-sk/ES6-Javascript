class Parent {
  constructor() {
    this.name = "parent";
  }

  sayHello() {
    console.log("Hello from Parent Class");
  }
}

// const parent = new Parent();
// console.log(parent.name); // "parent"
// parent.sayHello();

class Child extends Parent {
  constructor() {
    super();
    this.name = "Child";
  }

  sayGoodbye() {
    console.log("Able to call Parent method");
    this.sayHello();
  }
}

const child = new Child();
console.log(child.name); // "Child"
child.sayGoodbye();
