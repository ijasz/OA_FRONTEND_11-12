// console.log(a);

// var a = "ocean";
// var b = "ajeeth";

// greeting(a);

// function statement

// function greeting(name) {
//   console.log("hello" + " " + name);
// }

// greeting(b);

// console.log("start");

// greeting("ocean");

// console.log("end");

// greeting("ajeeth");

// function expression
//function acts as a value

// what is the difference between function statement vs function expression

// console.log(greeting);

// var a = function greeting(a) {
//   console.log("hello" + " " + a);
// };

// Named function

var a = function greeting(a) {
  console.log("hello" + " " + a);
};

// Anonymous function

// var a = function (a) {
//   console.log("hello" + " " + a);
// };

// Arrow Function => ES6

// var a = (a) => "hello" + " " + a;

// console.log(a("ocean"));

// IIFE

// (any function)()

(() => {
  console.log("arrow func");
})();

(function () {
  console.log("anonymous func");
})();

(function name() {
  console.log("named func");
})();
