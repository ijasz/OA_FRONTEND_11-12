// const username = prompt("enter your username");
// const password = prompt("enter your password");

// const secret_username = "ocean";
// const secret_password = "123";

// if (username == secret_username && password == secret_password)
//   console.log("Your Logged In☻");
// else console.log("Sorry, invalid credential");

const a = Number(prompt("enter A number"));
const b = Number(prompt("enter B number"));

if (isNaN(a, b) != true) {
  if (a == b) {
    console.log("both are equal", a, b);
  } else if (a > b) {
    console.log("a is greater", a);
    console.log("b is smaller", b);
  } else {
    console.log("b is greater", b);
    console.log("a is smaller", a);
  }
} else {
  console.log("invalid input");
}

// if (a > b) {
//   console.log("a is greater", a);
//   console.log("b is smaller", b);
// } else {
//   console.log("b is greater", b);
//   console.log("a is smaller", a);
// }
