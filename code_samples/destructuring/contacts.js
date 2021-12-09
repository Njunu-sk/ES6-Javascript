//// object destructuring

// old_javascript

const contacts = {
  name: "John Doe",
  street: "123 Main St.",
  career: "Software Engineer",
};

let name = contacts.name;
let street = contacts.street;
let career = contacts.career;
console.log(name);
console.log(street);
console.log(career);

console.log("**************************");

// es6

const contact = {
  nam: "Jane Doe",
  stree: "1234 Main St.",
  caree: "Software Architect",
};

let { nam, stree, caree } = contact;
console.log(nam);
console.log(stree);
console.log(caree);

console.log("**************************");
// spread operator

let arr = [3, 5, 1];

console.log(Math.max(...arr));

console.log("**************************");
// spread syntax can be used to merge arrays

let arr1 = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr1, 2, ...arr2];
console.log(merged);

// spread to copy array
let arr3 = [1, 2, 3, 4, 5];

let arr4 = [...arr3];

console.log(arr4);
