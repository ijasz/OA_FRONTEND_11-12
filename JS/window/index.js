// console.log("hello js");

// var person = {
//   f: "ocean",
//   l: "academy",
// };

// var skills = ["HTML", "CSS", "JS"];

// window.loc = "pondy";

// area = "saram";

//global object (web api) provided by browser => window

// console.log(window);
// console.log(globalThis);
// console.log(self);

// console.log(person);
// console.log(skills);

// console.log(window.person);
// console.log(window.skills);
// console.log(window.loc);
// console.log(area);
// console.log(window.area);

// function func() {
//   a = "function scope";
// }

// func();

// console.log(a);

// ✔

// var - Block scope ❌

console.log(a);

var a = "global scope";

{
  var a = "block scope";
  console.log(a);
}

console.log(a);
console.log(window.a);
