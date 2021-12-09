const arr0 = [
  "said",
  20,
  "JavaScript enthusiast",
  "Hi",
  "Said",
  "How are you?",
];

const Func = (...anArray) => {
  return anArray;
};

console.log(Func(arr0));

//output  ["said", 20, "JavaScript enthusiast", "Hi", "Said", "How are you?"

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
