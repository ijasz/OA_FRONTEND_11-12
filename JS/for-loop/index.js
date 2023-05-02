// for loop

const fruits = ["apple", "orange", "kiwi", "grapes", "watermelon", "mango"];

// person.sellingFruits[0] = "---";

// console.log(fruits);
// console.log(person);

// for (let i = 10; i >= 1; i--) {
//   console.log("hello" + " " + i);
//   console.log("");
// }

// for (let i = 0; i <= 10; i++) {
//   console.log("hi" + " " + i);
//   console.log("");
// }

// for (let i = 0; i < fruits.length; i++) console.log(fruits[i]);

// Array.prototype.other = "";

// console.log(fruits.other);

// for (let i of fruits) console.log(i);

// console.log(i);

const person = {
  name: "shopkeeper",
  sellingFruits: ["apple", "orange"],
};

for (let key in person) console.log(person[key]);

console.log("");

console.log(person["name"]);
console.log(person["sellingFruits"]);
