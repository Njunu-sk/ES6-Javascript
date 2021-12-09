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
