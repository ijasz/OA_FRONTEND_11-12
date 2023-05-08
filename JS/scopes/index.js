// scopes

// global(window)

var a = "global scope - window/global";

// global - script scope

let b = "global scope - script";

// block scope(let & const)

{
  let a = "block scope";
  console.log(a);
}

// functional / local scope

// function statement
function greeting() {
  console.log("hello ocean");
}

greeting();

// const user = {
//   f: "ocean",
//   l: "academy",
//   greeting: function () {
//     console.log("hello ocean", this);
//   },
// };

// user.greeting();
