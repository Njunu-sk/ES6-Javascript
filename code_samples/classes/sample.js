class sampleClass {
  constructor() {
    this.name = "sampleClass is defined";
  }

  class_method() {
    return "A method in a class is defined";
  }
}

const obj = new sampleClass();
console.log(obj.name);
console.log("************************");
console.log(obj.class_method());
